import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import me from "../../assets/images/me.jpg";
import { routesList } from "../../routes/AllRoutes";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Header.styles.scss';

const pages = [
  { page: 'Home', address: routesList.home },
  { page: 'About', address: routesList.about },
  { page: 'Projects', address: routesList.projects },
  { page: 'Resume', address: routesList.resume },
];

const drawerWidth = 240;

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Sourab
      </Typography>
      <Divider />
      <List>
        {pages
          .filter(({ address }) => address !== location.pathname)
          .map(({ page, address }) => (
          <ListItem key={page} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => navigate(address)}
            >
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" className="headerMain">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              edge="start"
              color="inherit"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          {/* Logo */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Sourab
          </Typography>
          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ page, address }) => (
              <Button
                key={page}
                className={`navButton ${address === location.pathname ? 'activeNav' : ''}`}
                onClick={() => navigate(address)}
                sx={{ my: 2, display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* Avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="That's me!">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="SK" src={me} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      {/* Drawer */}
      <nav>
        <Drawer
          variant="temporary"
          className='drawerMain'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
          
          <div className='drawerFooter'>
            <a href="mailto:sourabkapoor@yahoo.com" target='_blank' rel="noreferrer"><EmailIcon /></a>
            <a href="https://www.linkedin.com/in/sourab-kapoor-b210ab1b2/" target='_blank' rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </Drawer>
      </nav>
    </AppBar>
  );
};

export default Header;