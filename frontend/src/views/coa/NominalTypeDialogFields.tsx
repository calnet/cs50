import { TextFieldProps } from '@mui/material';

export const NominalTypeDialogFields: TextFieldProps[] = [
    // {
    //     autoFocus: true,
    //     margin: 'dense',
    //     id: 'id',
    //     label: 'ID',
    //     type: 'number',
    //     fullWidth: true,
    //     variant: 'outlined',
    // },
    {
        autoFocus: false,
        margin: 'dense',
        id: 'type_name',
        label: 'Nominal Type',
        type: 'text', // TODO: Change to dropdown and display list of nominal types
        fullWidth: true,
        variant: 'outlined',
    },
    {
        autoFocus: false,
        margin: 'dense',
        id: 'created_at',
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
        label: 'Updated',
        type: 'text',
        fullWidth: true,
        variant: 'outlined',
        // TODO: Format date
    },
    {
        autoFocus: false,
        margin: 'dense',
        id: 'category_name',
        label: 'COA Category',
        type: 'text',
        fullWidth: true,
        variant: 'outlined',
    },
];
