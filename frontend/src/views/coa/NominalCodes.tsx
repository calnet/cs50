import { GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CapstoneDataGrid from '../../utils/CapstoneDataGrid';
import { NominalCodeType } from './NominalCode';

function createRecord({ ...props }: NominalCodeType) {
    return {
        ...props,
    };
}

function NominalCodesList() {
    // const theme = useTheme();
    const [data, setData] = useState([]);

    const url = 'http://localhost:8000/api/nominal_codes/';

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
                console.log(response.data[0]);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [url]);

    const columns: GridColDef[] = [
        // {
        //     field: 'layout_name',
        //     headerName: 'Layout Name',
        //     type: 'string',
        //     flex: 0.25,
        // },
        // {
        //     field: 'id',
        //     headerName: 'ID',
        //     headerAlign: 'left',
        //     align: 'left',
        //     type: 'number',
        //     flex: 0.1,
        // },
        {
            field: 'nominal_code',
            headerName: 'Nominal Code',
            headerAlign: 'left',
            align: 'left',
            type: 'number',
            flex: 0.25,
            valueFormatter: (params) => {
                return String(params.value).padStart(4, '0');
            },
        },
        {
            field: 'nominal_name',
            headerName: 'Nominal Ledger Name',
            type: 'string',
            flex: 0.5,
        },
        {
            field: 'type_name',
            headerName: 'Nominal Type',
            headerAlign: 'left',
            align: 'left',
            type: 'string',
            flex: 0.5,
        },
        // {
        //     field: 'nominal_type',
        //     headerName: 'Nominal Type',
        //     headerAlign: 'left',
        //     align: 'left',
        //     type: 'number',
        //     flex: 0.5,
        // },
        // {
        //     field: 'created_at',
        //     headerName: 'Created',
        //     type: 'string',
        //     flex: 0.25,
        // },
        // {
        //     field: 'updated_at',
        //     headerName: 'Updated',
        //     type: 'string',
        //     flex: 0.25,
        // },
    ];

    const rows: NominalCodeType[] = [];

    data.map((item: NominalCodeType) =>
        rows.push(
            createRecord({
                id: item.id,
                layout_name: item.layout_name,
                nominal_code: item.nominal_code,
                nominal_name: item.nominal_name,
                type_name: item.type_name,
                created_at: item.created_at,
                updated_at: item.updated_at,
            })
        )
    );

    return <CapstoneDataGrid rows={rows} columns={columns} heading="Nominal Codes" dialog="NominalCodeDialog" />;
}

export default NominalCodesList;
