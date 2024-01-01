import "./UserHomePage.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Header from "../header/Header";
import DeliveryOrder from "../addOrder/DeliveryOrder";
import SendIcon from "@mui/icons-material/Send";
import Service from "./Service";
import BusinessDetails from "../businessDetails/BusinessDetails";
import AppStore from "../../store/AppStore";
import { useState, useEffect } from "react";
import { observer } from "mobx-react";
import Swal from "sweetalert2";
import service from "../../images/service.png";
const UserHomePage = observer(() => {
  useEffect(() => {
    localStorage.removeItem("Admin");
    AppStore.getOrders();
  }, []);
  const [orderData, setOrderData] = useState({
    identity: "#12123",
    type: "",
    username: "",
    address: "",
    phone: "",
    email: "",
    deliveryDate: "",
  });
  const handleChangeOrder = (e) => {
    setOrderData[e.target.name] = e.target.value;
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOrderData["identity"] = "#12123";
    let isMissingFields = false;
    Object.keys(orderData).forEach((field) => {
      if (setOrderData[field] == "" || setOrderData[field] == undefined)
        isMissingFields = true;
    });
    if (isMissingFields) {
      Swal.fire({
        title: "Error",
        text: "יש למלא את השדות החסרים",
        icon: "error",
      });
    } else {
      AppStore.postOrders(setOrderData);
      setOpen(false);
    }
  };

  return (
    <>
      <Header />
      <div className="bussinesData">
        <BusinessDetails />
      </div>
      <React.Fragment>
        <img
          src={service}
          alt="orderService"
          onClick={handleClickOpen}
          className="imgOrderService"
        />
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <DeliveryOrder handleChangeOrder={handleChangeOrder} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={() => {
                setOpen(false);
              }}
            >
              חזרה
            </Button>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleClose}
              autoFocus
            >
              סיום
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
      <div className="service">
        <Service />
      </div>
    </>
  );
});
export default UserHomePage;
