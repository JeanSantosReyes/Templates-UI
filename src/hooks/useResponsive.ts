import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

// ----------------------------------------------------------------------

export default function useResponsive(query: string, start: Breakpoint, end?: Breakpoint) {

    const theme = useTheme();

    const mediaUp = useMediaQuery(theme.breakpoints.up(start));

    const mediaDown = useMediaQuery(theme.breakpoints.down(start));

    const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end!));

    const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

    if (query === 'up') {
        return mediaUp;
    }

    if (query === 'down') {
        return mediaDown;
    }

    if (query === 'between') {
        return mediaBetween;
    }

    return mediaOnly;

}

// ----------------------------------------------------------------------