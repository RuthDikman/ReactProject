import "./cssLists/ListOfServices.css";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Fab from "@mui/material/Fab";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { DialogContent, Button, TextField } from "@material-ui/core";
import AppStore from "../../store/AppStore";
import NavigationIcon from "@mui/icons-material/Navigation";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import DepartureBoardRoundedIcon from "@mui/icons-material/DepartureBoardRounded";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import RvHookupIcon from "@mui/icons-material/RvHookup";
import { observer } from "mobx-react";
const ListOfServices = observer(() => {
  const [open, setOpen] = React.useState(false);
  const [newServiceText, setNewServiceText] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setNewServiceText("");
  };
  const handleTextFieldChange = (event) => {
    setNewServiceText(event.target.value);
  };
  const addService = () => {
    const newService = { name: newServiceText, icon: "NavigationIcon" };
    AppStore.postService(newService);
    handleClose();
  };
  const icons = (icon) => {
    let iconComponent;
    switch (icon) {
      case "LocalShippingOutlined":
        iconComponent = <LocalShippingOutlinedIcon />;
        break;
      case "GavelRounded":
        iconComponent = <GavelRoundedIcon />;
        break;
      case "DepartureBoardRounded":
        iconComponent = <DepartureBoardRoundedIcon />;
        break;
      case "TwoWheeler":
        iconComponent = <TwoWheelerIcon />;
        break;
      case "RvHookup":
        iconComponent = <RvHookupIcon />;
        break;
      default:
        iconComponent = <NavigationIcon />;
    }
    return iconComponent;
  };
  return (
    <>
      <List
        className="list"
        sx={{
          width: "100%",
          maxWidth: 500,
          bgcolor: "background.paper",
          position: "absolute",
          right: "3%",
          top: "25%",
          overflow: "auto",
          maxHeight: 400,
        }}
        subheader={<li />}
      >
        <li>
          <ul>
            {AppStore.listServices &&
              AppStore.listServices.map((service, index) => (
                <ListItem
                  key={index}
                  sx={{ paddingBottom: "5%", textAlign: "right" }}
                >
                  <ListItemText
                    primary={service.name}
                    sx={{ paddingRight: "10%" }}
                  />
                  {icons(service.icon)}
                </ListItem>
              ))}
          </ul>
        </li>
      </List>

      <React.Fragment>
        <Fab
          variant="extended"
          sx={{ mr: 5, position: "absolute", right: "3%", top: "90%" }}
          onClick={handleClickOpen}
        >
          <NavigationIcon sx={{ mr: 1 }} color="primary" />
          הוספת שירות
        </Fab>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <TextField
              id="outlined-basic"
              label="שירות"
              variant="outlined"
              value={newServiceText}
              onChange={handleTextFieldChange}
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={addService}>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
});

export default ListOfServices;
