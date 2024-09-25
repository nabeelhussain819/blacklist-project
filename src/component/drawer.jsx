import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Avatar } from '@mui/material';
import logo from '../img/logo black.png';
import { useNavigate } from 'react-router-dom';

// ... (imports remain the same)

export default function TemporaryDrawer() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    menu: false,
    showTalentSubItems: false,
    showContactSubItems: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState((prevState) => ({ ...prevState, [anchor]: open }));
  };

  const toggleSubItems = (itemName) => {
    setState((prevState) => ({ ...prevState, [itemName]: !prevState[itemName] }));
  };

  const menuItems = [
    { text: 'About', route: 'aboutus' },
    {
      text: 'Talent',
      mainItems: [
        {
          text: <b>Home</b>,
          route: 'tbitalent',
        },
        {
          text: <b>Models</b>,
          route: 'profile',
        },
        {
          text: <b>DJ's</b>,
          route: '',
        },
        {
          text: <b>Footballers</b>,
          route: '',
        },
        {
          text: <b>Cricketers</b>,
          route: '',
        },
        {
          text: <b>Musicians</b>,
          route: '',
        },
        {
          text: <b>Photographers</b>,
          route: '',
        },
        // Add more mainItems as needed
      ],
    },
    { text: 'Blog', route: 'blog' },
    {
      text: 'Contact Us',
      mainItems: [
        {
          text: <b>Get Scouted</b>,
          route: 'apply',
        },
        // Add more mainItems as needed
      ],
    },
    { text: 'Instagram', route: 'https://www.instagram.com/inctheblacklist?igsh=OHNmcHMxaXczcTM5' },
  ];

  const naviRoute = (route) => {
    navigate(`/${route}`);
    setState({ ...state, showTalentSubItems: false, showContactSubItems: false });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={(event) => event.stopPropagation()} // Prevents closing the drawer when clicking inside
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Avatar src={logo} style={{ borderRadius: '0%', marginLeft: '1rem' }} />
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => (item.mainItems ? toggleSubItems(`show${item.text.replace(/\s+/g, '')}SubItems`) : naviRoute(item.route))}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
            {item.mainItems && state[`show${item.text.replace(/\s+/g, '')}SubItems`] && (
              <List>
                {item.mainItems.map((mainItem) => (
                  <ListItem key={mainItem.text} disablePadding>
                    <ListItemButton onClick={() => naviRoute(mainItem.route)}>
                      <ListItemText primary={mainItem.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{ color: 'white' }}>
      {['menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{ color: 'white', padding: '0%', fontFamily: 'headerfont' }} onClick={toggleDrawer(anchor, !state.menu)}>
            {anchor}
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}



