import { CoaLayoutType } from './CoaLayout';
import { CoaLayoutDialogFields } from './CoaLayoutDialogFields';
import CoaLayoutDialogForm from './CoaLayoutDialogForm';

interface CoaLayoutDialogProps {
    open: boolean;
    handleClose: () => void;
    selectedRow: CoaLayoutType | undefined | null;
}

function CoaLayoutDialog({ ...props }: CoaLayoutDialogProps) {
    const { open, handleClose, selectedRow } = props;

    return CoaLayoutDialogForm({
        formTitle: 'Coa Layout Details',
        contentText: 'View Coa Layout Record',
        fields: CoaLayoutDialogFields,
        open: open,
        handleClose: handleClose,
        selectedRow: selectedRow,
    });
}

export default CoaLayoutDialog;
