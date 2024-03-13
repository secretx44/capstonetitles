import { Box, Button, Card, CardContent, Typography, Alert, CardActions } from "@mui/material";
import { useState } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

export default function RandomTitle(props: {
    contentTitle: string
}) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(props.contentTitle);
        setCopied(true);
    };

    const handleCloseAlert = () => {
        setCopied(false);
    };

    return (
        <Box component='section' sx={{p:2, boxShadow: '10px'}}>
            <Card sx={{minWidth: 200, minHeight: 200}}>
                    <Button sx={{float: 'right', p: 2, gap: 1}} onClick={copyToClipboard} disabled={copied}>
                        {copied ? "Copied" : "Copy Title"}
                        <ContentCopyIcon/>
                    </Button>
                <CardContent sx={{p: 5}}>
                    <Typography variant="subtitle1" component="span">
                        <h1>{props.contentTitle}</h1>
                    </Typography>
                </CardContent>
            </Card>
            {copied && (
                <Alert 
                    onClose={handleCloseAlert} 
                    severity="success" 
                    sx={{position: 'fixed', top: 16, right: 26}}
                >
                    <CheckIcon fontSize="inherit" /> Title Copied
                </Alert>
            )}
        </Box>
    );
}
