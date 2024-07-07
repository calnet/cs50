import { ViewComponentDialogType } from '../../types/ViewComponentDialogType';
import CapstoneFormDialog from '../../utils/CapstoneFormDialog';
import SupplierDialogFields from './SupplierDialogFields';

function SupplierDialog({ ...props }: ViewComponentDialogType) {
    const { dialogState, handleClose, selectedRow } = props;

    return CapstoneFormDialog({
        formTitle: 'Supplier Details',
        contentText: 'View Supplier Record Details',
        fields: SupplierDialogFields,
        dialogState: dialogState,
        handleClose: handleClose,
        selectedRow: selectedRow,
    });
}

export default SupplierDialog;
