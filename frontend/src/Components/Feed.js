import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import MyAppBar from "../Components/Navbar/MyAppBar";
import ProjectCard from "../Components/ProjectCard";
import Posts from "../Constants/Posts";
const drawerWidth = 240;
function Feed(props) {
  const colors = [
    "#ff8906",
    "#3da9fc",
    "#e53170",
    "#f25f4c",
    "#a786df",
    "#2cb67d",
  ];
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  const formattedPosts = Posts.map((post) => {
    const date = new Date(post.postedAt.$date).toLocaleString();
    return (
      <ProjectCard
        body={post.content}
        fullName={post.authorName}
        tagline={post.tagline}
        color={getRandomColor()}
        postedAt={date}
      />
    );
  });

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Inbox", "Groups", "Active Projects", "Freinds"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Browse", "Your Posts", "Contact Dev"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MyAppBar />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 3,
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Toolbar />
        {formattedPosts}
      </Box>
    </Box>
  );
}

export default Feed;
