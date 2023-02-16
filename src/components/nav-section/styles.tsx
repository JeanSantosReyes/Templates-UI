import { ListItemIcon, ListItemButton, styled } from "@mui/material";

interface Props {
  [x: string]: any;
}

export const StyledNavItem = styled(({ ...props }: Props) => <ListItemButton disableGutters {...props} />)(() => ({
  lineHeight: 22 / 14,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: '#637381',
  borderRadius: 10,
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
