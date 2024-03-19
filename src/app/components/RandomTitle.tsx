import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Card, CardContent, Typography, Alert, CardActions} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

export default function RandomTitle({contentTitle}: {contentTitle: string}) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contentTitle);
        setCopied(true);
    };

    const handleCloseAlert = () => {
        setCopied(false);
    };

    const theme = createTheme();

theme.typography.subtitle1 = {
  color: "#121212",
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
};



    return (
        <ThemeProvider theme={theme}>
        <Box component='section' sx={{borderRadius: 5, p:2, boxShadow: 10, minWidth: 200, minHeight: 300,}}>
            <Card sx={{boxShadow: 0, backgroundColor: "transparent" }}>
                <CardActions sx={{display: 'flex', justifyContent: 'end', alignItems: 'center', gap: 1, mb: 5}}>
                    <Button sx={{float: 'right', p: 1, gap: 1, fontWeight: 'bold', color: '#121212'}} variant="outlined" onClick={copyToClipboard} disabled={copied}>
                        {copied ? "Copied" : "Copy Title"}
                        <ContentCopyIcon/>
                    </Button>
                </CardActions>
                <CardContent sx={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto'}}>
                    <Typography variant="subtitle1" component="span">
                    {contentTitle}
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
        </ThemeProvider>
    );
}
