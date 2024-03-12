import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
export default function NextButton(props: {
    onClick: () => void;
}) {
    return (
        <Box sx={{mt: 3}}>
            <Button variant="contained" onClick={props.onClick}>Generate a new Title</Button>
        </Box>
    )
}