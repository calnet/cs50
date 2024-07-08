import { Paper, PaperProps } from '@mui/material';
import { useRef } from 'react';
import Draggable from 'react-draggable';

function PaperComponent(props: PaperProps) {
    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef} handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} ref={nodeRef} />
        </Draggable>
    );
}

export default PaperComponent;
