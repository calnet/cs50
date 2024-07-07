import { ViewComponentDialogType } from '../../types/ViewComponentDialogType';
import CapstoneFormDialog from '../../utils/CapstoneFormDialog';
import { CoaLayoutDialogFields } from './CoaLayoutDialogFields';

function CoaLayoutDialog({ ...props }: ViewComponentDialogType) {
    const { dialogState, handleClose, selectedRow } = props;

    return CapstoneFormDialog({
        formTitle: 'Coa Layout Details',
        contentText: 'View Coa Layout Record',
        fields: CoaLayoutDialogFields,
        dialogState: dialogState,
        handleClose: handleClose,
        selectedRow: selectedRow,
    });
}

export default CoaLayoutDialog;
