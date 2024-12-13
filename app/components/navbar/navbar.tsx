import * as React from "react";
import { useNavigate } from '@remix-run/react'
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import DashboardAppBar from "./topnav";
import { navLinks } from "~/utils/navlinks";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
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
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
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





export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);

  const router = useNavigate()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (text: string) => {
    setOpenMenu((prev) => (prev === text ? null : text));
  };

  const handleNavigation = (path: string) => {
    router(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <DashboardAppBar handleDrawerOpen={handleDrawerOpen} open={open} />
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography
            variant="h6"
            fontWeight={"600"}
            className="text-gray-700"
            alignContent={"center"}
          >
            Wingg
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navLinks.map((itm) => (
            <React.Fragment key={itm.text}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={[
                    { minHeight: 48, px: 2.5 },
                    open ? { justifyContent: "initial" } : { justifyContent: "center" },
                  ]}
                  onClick={() =>
                    itm.subMenu ? handleClick(itm.text) : handleNavigation(itm.path || "")
                  }
                >
                  <ListItemIcon
                    sx={[{ minWidth: 0, justifyContent: "center" }, open ? { mr: 3 } : { mr: "auto" }]}
                  >
                    <itm.icon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
                  </ListItemIcon>
                  <ListItemText primary={itm.text} sx={[open ? { opacity: 1 } : { opacity: 0 }]} />
                  {itm.subMenu && open ? (
                    openMenu === itm.text ? <ExpandLess /> : <ExpandMore />
                  ) : null}
                </ListItemButton>
              </ListItem>

              {itm.subMenu && open && (
                <Collapse in={openMenu === itm.text} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {itm.subMenu.map((subItm) => (
                      <ListItemButton
                        key={subItm.text}
                        sx={{ pl: 4 }}
                        onClick={() => handleNavigation(subItm.path)}
                      >
                        <ListItemIcon>
                          <subItm.icon />
                        </ListItemIcon>
                        <ListItemText primary={subItm.text} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <Box
        component={"main"}
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* Table to display dummy data */}
        {children}
      </Box>
    </Box>
  );
}
