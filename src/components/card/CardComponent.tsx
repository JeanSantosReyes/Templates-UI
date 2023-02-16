import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

const stylesCard = {
    backgroundColor: 'whitesmoke',
    border: '1px solid #DDDADA'
}

interface Props {
    title: string;
    subtitle?: string;
}

export const CardComponent = ({ title, subtitle }: Props) => {
    return (
        <Card sx={stylesCard}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {subtitle}
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}
