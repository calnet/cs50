import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
    PaperProps,
    TextField,
    TextFieldProps,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';

interface FormDialogType {
    formTitle?: string;
    contentText?: string;
    fields: TextFieldProps[];
    dialogState: boolean;
    handleClose: () => void;
    // eslint-disable-next-line
    selectedRow: any;
    // TODO: Fix the type of selectedRow
    // selectedRow: ViewComponentType | any;
}

function PaperComponent(props: PaperProps) {
    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef} handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} ref={nodeRef} />
        </Draggable>
    );
}

function CapstoneFormDialog({ ...props }: FormDialogType) {
    const { formTitle, contentText, fields, dialogState, handleClose, selectedRow } = props;
    const [localDialogState, setLocalDialogState] = useState(false);
    const [localSelectedRow, setLocalSelectedRow] = useState(null);

    // Update local state when props change
    useEffect(() => {
        setLocalDialogState(dialogState);
        setLocalSelectedRow(selectedRow);
    }, [dialogState, selectedRow]);

    const handleCloseDialog = () => {
        setLocalDialogState(false);
        handleClose();
    };

    return (
        <Dialog
            open={localDialogState}
            onClose={handleCloseDialog}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                {formTitle}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>{contentText}</DialogContentText>
                {fields.map((field) => {
                    // TODO: return the correct field type
                    return (
                        <TextField
                            key={field.id}
                            autoFocus={field.autoFocus}
                            margin={field.margin}
                            id={field.id}
                            label={field.label}
                            type={field.type}
                            fullWidth={field.fullWidth}
                            variant={field.variant}
                            value={field.id && localSelectedRow ? localSelectedRow[field.id] : ''}
                        />
                    );
                })}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseDialog}>Cancel</Button>
                <Button onClick={handleCloseDialog}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default CapstoneFormDialog;
