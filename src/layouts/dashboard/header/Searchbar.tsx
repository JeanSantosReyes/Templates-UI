import { useState } from "react";
// @mui
import { alpha, Button, ClickAwayListener, IconButton, Input, InputAdornment, Slide, styled } from "@mui/material";
// utils
import { bgBlur } from "../../../utils/cssStyles";
// component
import { Iconify } from "../../../components/iconify/Iconify";

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

const StyledSearchbar = styled('div')(({ theme }) => ({
    ...bgBlur({ color: '#F9FAFB' }),
    top: 0,
    left: 0,
    zIndex: 99,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    height: HEADER_MOBILE,
    padding: theme.spacing(0, 3),
    boxShadow: `0 8px 16px 0 ${alpha('#919EAB', 0.16)}`,
    [theme.breakpoints.up('md')]: {
        height: HEADER_DESKTOP,
        padding: theme.spacing(0, 5),
    },
}));

export const Searchbar = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <ClickAwayListener onClickAway={handleClose}>
            <div>
                {!open && (
                    <IconButton onClick={handleOpen}>
                        <Iconify icon="eva:search-fill" />
                    </IconButton>
                )}
                <Slide direction="down" in={open} mountOnEnter unmountOnExit>
                    <StyledSearchbar>
                        <Input
                            autoFocus
                            fullWidth
                            disableUnderline
                            placeholder="Search…"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                                </InputAdornment>
                            }
                            sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
                        />
                        <Button variant="contained" onClick={handleClose}>
                            Search
                        </Button>
                    </StyledSearchbar>
                </Slide>
            </div>
        </ClickAwayListener>
    )
}
