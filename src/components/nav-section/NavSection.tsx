import { NavLink as RouterLink } from 'react-router-dom';

import { Box, List, ListItemText } from "@mui/material";
import { StyledNavItem, StyledNavItemIcon } from './styles';
import { ReactElement } from 'react';

interface Data {
    title?: string;
    path?: string;
    icon?: ReactElement;
}

interface NavSectionProps {
    data: Data[];
}

const NavSection = ({ data = [], ...other }: NavSectionProps) => {
    return (
        <Box {...other}>
            <List disablePadding sx={{ p: 1 }}>
                {
                    data.map((item) => (
                        <NavItem key={item.title} item={item} />
                    ))
                }
            </List>
        </Box>
    )
}

interface Props {
    item: Data
}

const NavItem = ({ item }: Props) => {

    const { title, path, icon } = item;

    return (
        <StyledNavItem
            component={RouterLink}
            to={path}
            sx={{
                '&.active': {
                    color: 'text.primary',
                    bgcolor: 'action.selected',
                    fontWeight: 'fontWeightBold',
                },
            }}
        >
            <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

            <ListItemText disableTypography primary={title} />

        </StyledNavItem>
    )
}

export default NavSection;