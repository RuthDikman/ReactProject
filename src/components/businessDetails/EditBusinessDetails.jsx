import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppStore from "../../store/AppStore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useEffect } from "react";
import LoadingButton from "@material-ui/core/Button";
import SaveIcon from "@mui/icons-material/Save";
import { observer } from "mobx-react";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
  },
}));
const EditBusinessDetails = observer(() => {
  const classes = useStyles();
  const [listItems, setListItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const details = await AppStore.listBusinessData;
      setListItems([
        { primary: details.name, secondary: "שם העסק" },
        { primary: details.owner, secondary: "בעל העסק" },
        { primary: details.phone, secondary: "טלפון" },
        { primary: details.address, secondary: "כתובת" },
        { primary: details.description, secondary: "פרטים נוספים" },
      ]);
    };
    fetchData();
  }, []);
  const save = async () => {
    const requestBody = {
      name: listItems[0].primary,
      owner: listItems[1].primary,
      phone: listItems[2].primary,
      address: listItems[3].primary,
      description: listItems[4].primary,
    };
    AppStore.postBusinessData(requestBody);
  };
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
                <Avatar style={{ backgroundColor: "#e59173" }}>
                  <EditIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <input
                    type="text"
                    value={item.primary}
                    onChange={(e) => handleTextChange(index, e.target.value)}
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
        style={{ backgroundColor: "grey", color: "white" }}
        onClick={save}
        startIcon={<SaveIcon />}
        variant="contained"
      >
        <span>Save</span>
      </LoadingButton>
      <br />
    </>
  );
});
export default EditBusinessDetails;
