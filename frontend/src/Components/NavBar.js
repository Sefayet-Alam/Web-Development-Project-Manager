// src/Components/Navbar.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Button } from '@mui/material';
import './Navbar.css';
import './Home.css';
import pic from "./pics/navbar_pic.png";
import { useAuth } from '../AuthContext'; // Added import for useAuth

export default function Navbar(props) {
    const { drawerWidth, content } = props;
    const location = useLocation();
    const path = location.pathname;

    const [open, setOpen] = React.useState(false);
    const { logout } = useAuth(); // Added useAuth hook
    const navigate = useNavigate(); // Added useNavigate hook

    const changeOpenStatus = () => {
        setOpen(!open);
    };

    const handleLogout = () => {
        logout(); // Call the logout function from AuthContext
        navigate('/'); // Navigate to the login page
    };

    const myDrawer = (
        <div className="drawer-content">
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    <ListItem className="drawer">
                        <ListItemButton component={Link} to="/home" selected={"/home" === path} className="drawer-item">
                            <ListItemIcon>
                                <HomeIcon className="drawer-icon" />
                            </ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem className="drawer">
                        <ListItemButton component={Link} to="/about" selected={"/about" === path} className="drawer-item">
                            <ListItemIcon>
                                <InfoIcon className="drawer-icon" />
                            </ListItemIcon>
                            <ListItemText primary={"About"} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem className="drawer">
                        <ListItemButton component={Link} to="/create" selected={"/create" === path} className="drawer-item">
                            <ListItemIcon>
                                <BorderColorIcon className="drawer-icon" />
                            </ListItemIcon>
                            <ListItemText primary={"Create"} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </div>
    );

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} className="app-bar">
                    <Toolbar className="app-bar">
                        <IconButton
                            color="inherit"
                            sx={{ mr: 2, display: { sm: "none" } }}
                            onClick={changeOpenStatus}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                            <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
                                <img src={pic} alt="👨‍💻" style={{ height: 40 }} />
                            </IconButton>
                            Web Development Project Manager
                        </Typography>
                        <Button
                            color="inherit"
                            onClick={() => path === '/profile' ? handleLogout() : navigate('/profile')}
                            sx={{
                                backgroundColor: '#5b6163', // Darker color for the button background
                                borderRadius: '20px', // Rounded corners for modern look
                                padding: '5px 10px', // Add some padding
                                '&:hover': {
                                    backgroundColor: '#2E3B55' // Dark blue-grey on hover
                                }
                            }}>
                            {path === '/profile' ? "Logout" : "Profile"}
                        </Button> {/* Profile/Logout Button */}
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    {myDrawer}
                </Drawer>

                <Drawer
                    variant="temporary"
                    open={open}
                    onClose={changeOpenStatus}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    {myDrawer}
                </Drawer>

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    {content}
                </Box>
            </Box>

            <footer className="footer">
                <p>Developed by Sefayet Alam</p> <br />
                Contact: <br />
                <a href="https://web.facebook.com/profile.php?id=100006222737716" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                </a>
                <a href="https://github.com/Sefayet-Alam">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.48 7.6.4.07.55-.17.55-.39 0-.19-.01-.69-.01-1.36-2.22.48-2.68-.57-2.68-.57-.36-.9-.88-1.14-.88-1.14-.72-.49.05-.48.05-.48.8.06 1.22.82 1.22.82.71 1.21 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.78-.2-3.66-.89-3.66-3.97 0-.88.32-1.6.84-2.15-.09-.21-.37-1.05.08-2.19 0 0 .69-.22 2.26.85a7.86 7.86 0 012.05-.28c.69 0 1.39.09 2.05.28 1.57-1.07 2.26-.85 2.26-.85.45 1.14.18 1.98.09 2.19.52.55.84 1.27.84 2.15 0 3.08-1.89 3.77-3.68 3.97.28.24.53.73.53 1.48 0 1.07-.01 1.94-.01 2.21 0 .23.15.5.56.41C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </a>
            </footer>
        </div>
    );
}
