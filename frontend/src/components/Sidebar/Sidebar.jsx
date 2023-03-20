import { useContext, useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Typography, MenuItem } from "@mui/material";
import axios from "axios";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { ColorModeContext, tokens } from "../../theme";
// import { UserProvider } from "../../context/userContext";

const drawerWidth = 240;

const styles = {
  iconsBox: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexGrow: 1,
  },
};

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserId, setCurrentUserId] = useState(null);
  console.info(
    "🚀 ~ file: Sidebar.jsx:112 ~ MiniDrawer ~ currentUserId:",
    currentUserId
  );

  const [randomUserImage, setRandomUserImage] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleColorMode } = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Appel à l'API pour afficher l'utilisateur connecté

  const getUser = () => {
    axios
      .get(`http://localhost:5000/users/1`)
      .then((response) => response.data)
      .then((data) => {
        setCurrentUser(data);
        setCurrentUserId(data.id);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    async function fetchRandomUserImage() {
      const response = await axios.get(
        "https://randomuser.me/api/?gender=male"
      );
      const image = response.data.results[0].picture.large;
      setRandomUserImage(image);
    }
    fetchRandomUserImage();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ ...styles.iconsBox, ...(open ? {} : { flexGrow: 0 }) }}>
            <Box display="flex">
              <IconButton onClick={toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeOutlinedIcon />
                )}
              </IconButton>
              <IconButton>
                <NotificationsOutlinedIcon />
              </IconButton>
              <IconButton href={`/user-profile/${currentUserId}`}>
                <PersonOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        style={{
          backgroundColor: colors.primary[500],
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronRightIcon />
                  ) : (
                    <ChevronLeftIcon />
                  )}
                </IconButton>
              </Box>
              <Typography
                variant="h4"
                color={colors.grey[100]}
                sx={{ pl: "1em" }}
              >
                DevHub Project
              </Typography>
            </Box>
          </MenuItem>
          {/* USER */}
          {open && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box key={currentUser.id}>
                  {currentUser.user_image ? (
                    <img
                      style={{ width: "150px", borderRadius: "50%" }}
                      src={currentUser.user_image}
                      alt="user"
                    />
                  ) : (
                    <img
                      style={{ width: "150px", borderRadius: "50%" }}
                      src={randomUserImage}
                      alt="default user"
                    />
                  )}
                </Box>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  <Box key={currentUser.id}>
                    {`${currentUser.firstname} 
                    ${currentUser.lastname}`}
                  </Box>
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  <Box key={currentUser.id}>{currentUser.user_role}</Box>
                </Typography>
              </Box>
            </Box>
          )}
        </DrawerHeader>
        <Divider />

        {/* ITEM */}

        <List>
          <ListItem key="Dashboard" disablePadding sx={{ display: "block" }}>
            <ListItemButton
              to="/dashboard"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardCustomizeOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem key="Mailbox" disablePadding sx={{ display: "block" }}>
            <ListItemButton
              to="/mailbox"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <EmailOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Mailbox" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem key="Contacts" disablePadding sx={{ display: "block" }}>
            <ListItemButton
              to="/contact"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ContactMailOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Contacts" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="Add Project" disablePadding sx={{ display: "block" }}>
            <ListItemButton
              to="/add-project"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <AddCircleOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Add Project"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem key="Calendar" disablePadding sx={{ display: "block" }}>
            <ListItemButton
              to="/calendar"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <CalendarTodayOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Calendar" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key="Project Progress"
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              to="/progress"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PieChartOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Project Progress"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List
          sx={{ display: "flex", flexDirection: "column", marginTop: "auto" }}
        >
          <ListItem key="LogOut" disablePadding sx={{ display: "block" }}>
            <ListItemButton
              to="/"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LogoutOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="LogOut" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
