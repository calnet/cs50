import { NominalCodeType } from './NominalCode';
import { NominalCodeDialogFields } from './NominalCodeDialogFields';
import NominalCodeFormDialog from './NominalCodeFormDialog';

interface NominalCodeDialogProps {
    open: boolean;
    handleClose: () => void;
    selectedRow: NominalCodeType | undefined | null;
}

function NominalCodeDialog({ ...props }: NominalCodeDialogProps) {
    const { open, handleClose, selectedRow } = props;

    return NominalCodeFormDialog({
        formTitle: 'Nominal Code Details',
        contentText: 'View Nominal Code Record',
        fields: NominalCodeDialogFields,
        open: open,
        handleClose: handleClose,
        selectedRow: selectedRow,
    });
}

export default NominalCodeDialog;
