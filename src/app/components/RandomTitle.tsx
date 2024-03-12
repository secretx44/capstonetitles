import { Card, CardContent, Typography } from "@mui/material"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function RandomTitle(props: {
    contentTitle: string
}) {
    return (
        <Card sx={{minWidth: 300, minHeight: 200}}>
            <ContentCopyIcon/>
            <CardContent>
                <Typography variant="subtitle1" component="span">
                <h1>{props.contentTitle}</h1>
                </Typography>
            </CardContent>
        </Card>
    )
}