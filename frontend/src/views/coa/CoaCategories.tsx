import { GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CapstoneDataGrid from '../../utils/CapstoneDataGrid';

export type CoaCategoryType = {
    id: number;
    category_name: string;
    created_at: string;
    updated_at: string;
};

function createRecord({ ...props }: CoaCategoryType) {
    return {
        ...props,
    };
}

function CoaCategoriesList() {
    // const theme = useTheme();
    const [data, setData] = useState([]);

    const url = 'http://localhost:8000/api/coa_categories/';

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
        {
            field: 'id',
            headerName: 'ID',
            headerAlign: 'left',
            align: 'left',
            type: 'number',
            flex: 0.1,
        },
        {
            field: 'category_name',
            headerName: 'Category Name',
            type: 'string',
            flex: 1.25,
        },
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

    const rows: CoaCategoryType[] = [];

    data.map((item: CoaCategoryType) =>
        rows.push(
            createRecord({
                id: item.id,
                category_name: item.category_name,
                created_at: item.created_at,
                updated_at: item.updated_at,
            })
        )
    );

    return <CapstoneDataGrid rows={rows} columns={columns} heading="Coa Categories" dialog="CoaCategoryDialog" />;
}

export default CoaCategoriesList;
