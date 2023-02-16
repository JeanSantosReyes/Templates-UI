import { Box, Grid, Typography } from "@mui/material";
import { CardComponent } from "../components/card/CardComponent";

export const DashboardPage = () => {
    return (
        <Box sx={{ mx: 2 }}>

            <Typography variant="h3" sx={{ pb: 3, display: 'flex', justifyContent: 'center' }}>
                Dashboard
            </Typography>

            <Grid container spacing={2}>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <CardComponent
                        title='Card 1'
                        subtitle='Subtitle 1'
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <CardComponent
                        title='Card 2'
                        subtitle='Subtitle 2'
                    />
                </Grid>

            </Grid>
        </Box>

    )
}
export default DashboardPage;