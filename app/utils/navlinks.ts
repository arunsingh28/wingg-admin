import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import EmailIcon from "@mui/icons-material/Email";

export const navLinks = [
  { text: "Dashboard", icon: DashboardIcon },
  {
    text: "Permissions",
    icon: SettingsIcon,
    subMenu: [
      {
        text: "Inbox",
        icon: HomeIcon,
        path: "/permission/inbox",
      },
      {
        text: "Workflows",
        icon: HomeIcon,
        path: "/permission/workflows",
      },
    ],
  },
  {
    text: "Email templates",
    icon: EmailIcon,
    path: "/email-templates",
  },
]
