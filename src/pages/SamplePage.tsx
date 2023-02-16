import { Box, Skeleton } from "@mui/material";

export const SamplePage = () => {
    return (
        <Box sx={{ mx: 3 }}>
            <h1>Sample Skeleton</h1>
            <Skeleton variant="circular" width={40} height={40} />
            <br />
            <Skeleton variant="rectangular" width={210} height={60} />
            <br />
            <Skeleton variant="rounded" width={210} height={60} />
        </Box>
    )
}

export default SamplePage;