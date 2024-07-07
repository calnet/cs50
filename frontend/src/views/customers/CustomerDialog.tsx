import { ViewComponentDialogType } from '../../types/ViewComponentDialogType';
import CapstoneFormDialog from '../../utils/CapstoneFormDialog';
import CustomerDialogFields from './CustomerDialogFields';

function CustomerDialog({ ...props }: ViewComponentDialogType) {
    const { dialogState, handleClose, selectedRow } = props;

    return CapstoneFormDialog({
        formTitle: 'Customer Details',
        contentText: 'View Customer Record Details',
        fields: CustomerDialogFields,
        dialogState: dialogState,
        handleClose: handleClose,
        selectedRow: selectedRow,
    });
}

export default CustomerDialog;
