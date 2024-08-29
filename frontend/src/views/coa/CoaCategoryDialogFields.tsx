import { TextFieldProps } from '@mui/material';

const CoaCategoryDialogFields: TextFieldProps[] = [
    // {
    //     autoFocus: false,
    //     margin: 'dense',
    //     id: 'id',
    //     name: 'id',
    //     label: 'ID',
    //     type: 'number',
    //     fullWidth: true,
    //     variant: 'outlined',
    // },
    {
        autoFocus: true,
        margin: 'dense',
        id: 'category_name',
        name: 'category_name',
        label: 'COA Category',
        type: 'text',
        fullWidth: true,
        variant: 'outlined',
    },
    {
        autoFocus: false,
        margin: 'dense',
        id: 'created_at',
        name: 'created_at',
        label: 'Created',
        type: 'text',
        fullWidth: true,
        variant: 'outlined',
        // TODO: Format date
    },
    {
        autoFocus: false,
        margin: 'dense',
        id: 'updated_at',
        name: 'updated_at',
        label: 'Updated',
        type: 'text',
        fullWidth: true,
        variant: 'outlined',
        // TODO: Format date
    },
];

export default CoaCategoryDialogFields;
