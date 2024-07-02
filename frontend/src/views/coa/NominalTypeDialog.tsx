import { NominalTypeDialogFields } from './NominalTypeDialogFields';
import NominalTypeFormDialog from './NominalTypeFormDialog';
import { NominalTypeProps } from './NominalTypes';

interface NominalTypeDialogProps {
    open: boolean;
    handleClose: () => void;
    selectedRow: NominalTypeProps | undefined | null;
}

function NominalTypeDialog({ ...props }: NominalTypeDialogProps) {
    const { open, handleClose, selectedRow } = props;

    return NominalTypeFormDialog({
        formTitle: 'Nominal Type Details',
        contentText: 'View Nominal Type Record',
        fields: NominalTypeDialogFields,
        open: open,
        handleClose: handleClose,
        selectedRow: selectedRow,
    });
}

export default NominalTypeDialog;
