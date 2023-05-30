import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, MenuItem, Container, AppBar, Toolbar, Box, IconButton, Menu, Typography } from '@mui/material';
import LogoInnocloud from '../../assets/images/logo.png'
import './index.css'

const pages = [
  {title: 'Home', link: 'home'},
  {title: 'Sobre', link: 'about'},
  {title: 'Serviços', link: 'service'},
  {title: 'Vantagens', link: 'why'},
  {title: 'Contato', link: 'contact'}
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className='navbar-container'>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <img src={LogoInnocloud} alt='' style={{ height: 50, width: 'fitContent'}} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><a className='linkDropDown' href={`#${page.link}`} style={{ textDecoration: 'none' }}>{page.title}</a></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map(page => (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <a href={`#${page.link}`} className='link'>
                  {page.title}
                </a>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;