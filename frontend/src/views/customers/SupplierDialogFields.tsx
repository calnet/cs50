import { TextFieldProps } from '@mui/material';

const SupplierDialogFields: TextFieldProps[] = [
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
        id: 'account_reference',
        label: 'Account Reference',
        type: 'text',
        fullWidth: true,
    },
    {
        autoFocus: false,
        margin: 'dense',
        id: 'account_name',
        label: 'Account Name',
        type: 'text',
        fullWidth: true,
    },
    {
        autoFocus: false,
        margin: 'dense',
        id: 'account_status',
        label: 'Account Status',
        type: 'text',
        fullWidth: true,
    },
    {
        autoFocus: false,
        margin: 'dense',
        id: 'balance',
        label: 'Balance',
        type: 'number',
        fullWidth: true,
    },
    {
        autoFocus: false,
        margin: 'dense',
        id: 'contact_name',
        label: 'Contact Name',
        type: 'text',
        fullWidth: true,
    },
    {
        autoFocus: false,
        margin: 'dense',
        id: 'credit_limit',
        label: 'Credit Limit',
        type: 'number',
        fullWidth: true,
    },
    {
        autoFocus: false,
        margin: 'dense',
        id: 'telephone_number',
        label: 'Telephone Number',
        type: 'text',
        fullWidth: true,
    },
    {
        autoFocus: false,
        margin: 'dense',
        id: 'created_at',
        label: 'Created At',
        type: 'text',
        fullWidth: true,
    },
    {
        autoFocus: false,
        margin: 'dense',
        id: 'updated_at',
        label: 'Updated At',
        type: 'text',
        fullWidth: true,
    },
];

export default SupplierDialogFields;
