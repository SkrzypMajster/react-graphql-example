import {useState, MouseEvent} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import {NavbarProps} from "./Navbar.types";
import {BaseLink} from "../BaseLink/BaseLink";
import {SearchInputContainer} from "../SearchInput/SearchInputContainer";

export const Navbar = ({title, items }: NavbarProps) => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky">
            <Box sx={{paddingLeft: 3, paddingRight: 3}}>
                <Toolbar disableGutters>
                    <BaseLink path="/">
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{mr: 2, color: '#fff', display: {xs: 'none', md: 'flex'}}}
                        >
                            {title}
                        </Typography>
                    </BaseLink>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{display: {xs: 'block', md: 'none'}}}
                        >
                            {items.map((page) => (
                                <BaseLink path={page.path} key={page.path}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.label}</Typography>
                                    </MenuItem>
                                </BaseLink>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                    >
                        {title}
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, paddingLeft: 1}}>
                        {items.map((page) => (
                            <BaseLink path={page.path} key={page.path}>
                                <Button onClick={handleCloseNavMenu} sx={{my: 2, color: 'white', display: 'block'}}>
                                    {page.label}
                                </Button>
                            </BaseLink>
                        ))}
                    </Box>
                    <Box sx={{flexGrow: 0, display: {xs: 'none', md: 'block'}}}>
                        <SearchInputContainer />
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
    );
};
