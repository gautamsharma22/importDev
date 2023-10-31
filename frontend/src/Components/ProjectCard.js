import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ForumIcon from "@mui/icons-material/Forum";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const Comment = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(360deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.short,
  }),
}));

const ProjectCard = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const { body, fullName, postedAt, tagline, color, post_id } = props;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
    key={post_id}
      sx={{ maxWidth: { sm: "80vw", md: "50vw" }, m: 1.5, mt: 0 }}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: color }}>{fullName[0]}</Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={fullName}
        subheader={postedAt}
      />
      <CardContent>
        <Typography variant="h5">{tagline}</Typography>
        <Typography paragraph color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon sx={{ color: "red" }} />
        </IconButton>
        <Comment
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ForumIcon />
        </Comment>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Comment 1" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Comment 1"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Intereseted
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Comment 2" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Comment 2"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Interested
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Comment 3" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Comment 3"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Intereseted
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default ProjectCard;
