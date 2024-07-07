import { ViewComponentDialogType } from '../../types/ViewComponentDialogType';
import CapstoneFormDialog from '../../utils/CapstoneFormDialog';
import { NominalTypeDialogFields } from './NominalTypeDialogFields';

function NominalTypeDialog({ ...props }: ViewComponentDialogType) {
    const { dialogState, handleClose, selectedRow } = props;

    return CapstoneFormDialog({
        formTitle: 'Nominal Type Details',
        contentText: 'View Nominal Type Record',
        fields: NominalTypeDialogFields,
        dialogState: dialogState,
        handleClose: handleClose,
        selectedRow: selectedRow,
    });
}

export default NominalTypeDialog;
