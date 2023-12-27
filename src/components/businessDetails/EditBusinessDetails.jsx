import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'; // This line has been changed
import ListItemText from '@material-ui/core/ListItemText'; // This line has been changed
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react';
import LoadingButton from '@material-ui/core/Button';
import SaveIcon from '@mui/icons-material/Save';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth:250,
    backgroundColor: theme.palette.background.paper,
  },
}));
function EditBusinessDetails() {

  const classes = useStyles();
  const [listItems, setListItems] = useState([]);  
  useEffect(() => {
    const fetchData = async () => {
      const details = await handleGetBusiness();
      setListItems(
        [
          { primary: details.name, secondary: 'שם העסק' }, 
          { primary:details.owner, secondary: 'בעל העסק' }, 
          { primary:details.address, secondary: 'כתובת' },
          { primary:details.phone, secondary: 'טלפון' },
          { primary:details.description, secondary: 'פרטים נוספים' }, 
        ]
      )
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
const save = async (list) => {
  const requestBody = {
    name: listItems[0].primary,
    id: "123",
    address: listItems[2].primary,
    phone: listItems[3].primary,
    owner: listItems[1].primary,
    logo: "https://coding-academy.org/images/ca_logo.png",
    description: listItems[4].primary,
  };
  const response = await fetch("http://localhost:8787/businessData", {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
}
  const handleTextChange = (index, newText) => {
    const updatedListItems = [...listItems];
    updatedListItems[index] = { ...updatedListItems[index], primary: newText };
    setListItems(updatedListItems);
  };
  return ( 
    <>
    <List className={classes.root}>
      {listItems.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <EditIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <input
                  type="text"
                  value={item.primary}
                  onChange={(e) => handleTextChange(index,e.target.value,)}
                />
              }
              secondary={item.secondary}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
    <LoadingButton
          size="small"
          color="secondary"
          onClick={save}
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton>
        <br/>
    </>
  );
}
export default EditBusinessDetails