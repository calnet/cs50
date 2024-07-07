import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { useState } from 'react';
import BankingAccountListDialog from '../views/banking/BankingAccountListDialog';
import CoaCategoryDialog from '../views/coa/CoaCategoryDialog';
import CoaLayoutDialog from '../views/coa/CoaLayoutDialog';
import NominalCodeDialog from '../views/coa/NominalCodeDialog';
import NominalTypeDialog from '../views/coa/NominalTypeDialog';
import CustomerDialog from '../views/customers/CustomerDialog';
import SupplierDialog from '../views/customers/SupplierDialog';

type CapstoneDataGridType = {
    // eslint-disable-next-line
    rows: any[];
    columns: GridColDef[];
    heading: string;
    dialog?: string;
};

function CapstoneDataGrid({ rows, columns, heading, dialog = '' }: CapstoneDataGridType) {
    const [dialogState, setDialogState] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const height = rows.length > 0 ? 'auto' : 200;

    const handleRowClick = (params: GridRowParams) => {
        console.log(params.row);
        setDialogState(true);
    };

    const componentMap = {
        BankingAccountListDialog: BankingAccountListDialog,
        CoaCategoryDialog: CoaCategoryDialog,
        CoaLayoutDialog: CoaLayoutDialog,
        CustomerDialog: CustomerDialog,
        // LayoutDialog: LayoutDialog,
        NominalCodeDialog: NominalCodeDialog,
        NominalTypeDialog: NominalTypeDialog,
        SupplierDialog: SupplierDialog,

        // Add more components as needed
    };

    let DialogComponent = null;

    if (dialog in componentMap) {
        DialogComponent = componentMap[dialog as keyof typeof componentMap];
    }

    return (
        <>
            <Box sx={{ p: 1, typography: 'h3', color: 'cadetblue' }}>{heading}</Box>
            <Box component={Paper} height={height} minWidth={650}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    onRowClick={(params: GridRowParams) => {
                        setSelectedRow(params.row);
                        handleRowClick(params);
                    }}

                    // checkboxSelection
                />
                {DialogComponent && (
                    <DialogComponent dialogState={dialogState} handleClose={() => setDialogState(false)} selectedRow={selectedRow} />
                )}
            </Box>
        </>
    );
}

export default CapstoneDataGrid;
