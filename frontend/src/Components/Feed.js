import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import MyAppBar from "../Components/Navbar/MyAppBar";
import ProjectCard from "../Components/ProjectCard";
import Posts from "../Constants/Posts";
import drawer from "./Navbar/LeftDrawer";
import RightDrawer from "./Navbar/RightDrawer";
const drawerWidth = "22vw";
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
        key={post._id}
        post_id={post._id}
        body={post.content}
        fullName={post.authorName}
        tagline={post.tagline}
        color={getRandomColor()}
        postedAt={date}
      />
    );
  });

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <MyAppBar />
        <Box
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
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Toolbar />
        {formattedPosts}
      </Box>
      <RightDrawer />
    </>
  );
}

export default Feed;
