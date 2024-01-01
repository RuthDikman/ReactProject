import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DetailsIcon from "@mui/icons-material/Details";
import AppStore from "../../store/AppStore";
import { observer } from "mobx-react";
const BusinessDetails = observer(() => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 250,
        bgcolor: "background.paper",
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#e59173" }}>
            <BusinessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={AppStore.listBusinessData.name}
          secondary="שם העסק"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#e59173" }}>
            <PersonOutlineIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={AppStore.listBusinessData.owner}
          secondary="בעל העסק"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#e59173" }}>
            <PhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={AppStore.listBusinessData.phone}
          secondary="טלפון"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#e59173" }}>
            <HomeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={AppStore.listBusinessData.address}
          secondary="כתובת"
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#e59173" }}>
            <DetailsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={AppStore.listBusinessData.description}
          secondary="פרטים נוספים"
        />
      </ListItem>
    </List>
  );
});
export default BusinessDetails;
