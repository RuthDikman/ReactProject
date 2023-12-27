import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DetailsIcon from '@mui/icons-material/Details';
import { useState, useEffect } from 'react';
function BusinessDetails() {
  const [businessDetails, setBusinessDetails] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const details = await handleGetBusiness();
      setBusinessDetails(details);
    };
    fetchData();
  }, []);
  const handleGetBusiness = async () => {
    const response = await fetch("http://localhost:8787/businessData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      const business = await response.json();
      return business; 
    } else {
      console.log("Error fetching business details");
      return null; 
    }
  };

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 250,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BusinessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={businessDetails===null?"null": businessDetails.name} secondary="שם העסק"/>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonOutlineIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={businessDetails===null?"null": businessDetails.owner} secondary="בעל העסק" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <PhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={businessDetails===null?"null": businessDetails.phone} secondary="טלפון" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HomeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={businessDetails===null?"null": businessDetails.address} secondary="כתובת" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DetailsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={businessDetails===null?"null": businessDetails.description} secondary="פרטים נוספים" />
      </ListItem>
    </List>
  );
}
export default BusinessDetails