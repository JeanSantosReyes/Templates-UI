import { Box } from '@mui/material';
import { StyledRootScrollbar, StyledScrollbar } from './styles';

interface Props {
    [x: string]: any
}

const Scrollbar = ({ children, sx, ...props }: Props) => {

    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (isMobile) {
        return (
            <Box sx={{ overflowX: 'auto', ...sx }} {...props}>
                {children}
            </Box>
        );
    }

    return (
        <StyledRootScrollbar>
            <StyledScrollbar sx={sx} {...props}>
                {children}
            </StyledScrollbar>
        </StyledRootScrollbar>
    )
}

export default Scrollbar;