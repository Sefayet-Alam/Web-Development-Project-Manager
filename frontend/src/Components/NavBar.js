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
import pic from "./logo192.png";
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
                        <Button color="inherit" onClick={handleLogout}>Logout</Button> {/* Added Logout Button */}
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
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/sefayet-alam-8333b4242/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.4 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725a.72.72 0 0 1-.725-1.146V1.146zm4.943 12.248V5.882H3.12v7.512h1.823zm-1.819-8.59c.614 0 1.116-.502 1.116-1.118a1.117 1.117 0 1 0-2.233 0c0 .616.502 1.118 1.116 1.118zm4.674 8.59V8.255c0-.317-.027-.634-.144-.905a2.392 2.392 0 0 0-2.239-1.498c-1.103 0-1.816.74-2.115 1.45-.09.24-.119.553-.119.874v3.918h1.822v-4.18c0-.21.017-.42.082-.606a.957.957 0 0 1 .894-.683c.63 0 .882.482.882 1.189v4.28h1.821zm4.897 0V8.08c0-2.007-1.06-2.943-2.476-2.943-1.143 0-1.66.627-1.953 1.07V5.882h-1.822c.024.56 0 7.512 0 7.512h1.822v-4.2c0-.224.016-.447.08-.634.177-.45.581-.916 1.258-.916.887 0 1.242.692 1.242 1.707v4.043h1.822z" />
                    </svg>
                </a>
            </footer>
        </div>
    );
}
