import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { FormDialogType } from '../types/FormDialogType';
import PaperComponent from './PaperComponent';

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
