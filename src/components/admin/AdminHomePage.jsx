import "./cssAdmin/AdminHomePage.css";
import { observer } from "mobx-react";
import Store from "../../store/Store";
import React from "react";
import Switch from "@material-ui/core/Switch";
import BusinessDetails from "../businessDetails/BusinessDetails";
import EditBusinessDetails from "../businessDetails/EditBusinessDetails";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DvrIcon from "@mui/icons-material/Dvr";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
const AdminHomePage = observer(() => {
  const [state, setState] = useState({
    checkedB: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    Store.setIsedit(!Store.isEdit);
  };
  return (
    <>
      <div className="bodyComponnent">
        {!Store.isEdit ? <BusinessDetails /> : <EditBusinessDetails />}
        <Switch
          checked={state.checkedB}
          onChange={handleChange}
          color="black"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </div>
      <Tabs
        value={1}
        aria-label="icon label tabs example"
        className="tabsBodey"
      >
        <Link to="./services">
          <Tab
            value={1}
            icon={<SettingsSuggestIcon style={{ fontSize: "3rem" }} />}
            label="List of services"
            className="tab"
          />
        </Link>
        <Link to="./orders">
          <Tab
            icon={<DvrIcon style={{ fontSize: "3rem" }} />}
            label="List of orders"
            className="tab"
          />
        </Link>
      </Tabs>
      <Outlet />
    </>
  );
});

export default AdminHomePage;
