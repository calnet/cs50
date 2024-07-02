import { NominalTypeDialogFields } from './NominalTypeDialogFields';
import NominalTypeFormDialog from './NominalTypeFormDialog';
import { NominalTypeProps } from './NominalTypes';

interface NominalCodeDialogProps {
    open: boolean;
    handleClose: () => void;
    selectedRow: NominalTypeProps | undefined | null;
}

function NominalTypeDialog({ ...props }: NominalCodeDialogProps) {
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
