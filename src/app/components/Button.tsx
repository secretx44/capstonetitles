import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from '@mui/material';

export default function NextButton(props: {
    onClick: () => void;
    loading: boolean;
}) {
    return (
        <Box sx={{my: 3}}>
            <LoadingButton
                size="small"
                onClick={props.onClick}
                loading={props.loading}
                loadingIndicator="Loading…"
                variant="contained"
            >
                Generate a new Title
            </LoadingButton>
        </Box>
    )
}
