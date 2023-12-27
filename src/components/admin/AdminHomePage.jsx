import { observer } from "mobx-react"
import AppStore from "../../store/AppStore"
import React from 'react';
import Switch from '@material-ui/core/Switch';
import BusinessDetails from "../businessDetails/BusinessDetails";
import EditBusinessDetails from "../businessDetails/EditBusinessDetails";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Outlet, Link } from "react-router-dom"
const AdminHomePage = (observer(() => {
    const [state, setState] = React.useState({
        checkedB: false,
      });
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        AppStore.setIsedit(!AppStore.isEdit);
      };
    return (
        <>
         <div style={{position:'absolute', left:'0',top:'25%' }}>
        {!AppStore.isEdit ?
               <BusinessDetails /> :
                <EditBusinessDetails />
            }
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
            </div>
            <Stack direction="column" spacing={10} position={"absolute"} left={"20%"} top={"40%"}>
            <Link to="./services">
            <Button variant="contained" endIcon={<SendIcon />}>
              רשימת שירותים
            </Button>
            </Link>
            <Link to="./orders">
            <Button variant="contained" endIcon={<SendIcon />}>
              רשימת הזמנות
            </Button>
            </Link>
          </Stack>
          <Outlet />
        </>   
    )
}))

export default AdminHomePage