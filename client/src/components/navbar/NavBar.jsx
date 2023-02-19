import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { logout } from '../../context/AuthActions';
// import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar({title, handleOnClickChart, cartItems}) {
  const { user, dispatch } = useContext(AuthContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {user? <Button color="inherit" href='/logout' onClick={()=>dispatch(logout())}>Logout</Button> : <Button color="inherit" href='/login'>Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
