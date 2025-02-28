import { ViewComponentDialogType } from '../../types/ViewComponentDialogType';
import CapstoneFormDialog from '../../utils/CapstoneFormDialog';
import { NominalCodeDialogFields } from './NominalCodeDialogFields';

function NominalCodeDialog({ ...props }: ViewComponentDialogType) {
    const { dialogState, handleClose, selectedRow } = props;

    return CapstoneFormDialog({
        formTitle: 'Nominal Code Details',
        contentText: 'View Nominal Code Record',
        fields: NominalCodeDialogFields,
        dialogState: dialogState,
        handleClose: handleClose,
        selectedRow: selectedRow,
    });
}

export default NominalCodeDialog;
