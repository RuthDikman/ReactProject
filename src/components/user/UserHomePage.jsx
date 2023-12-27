import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Header from './Header'
import DeliveryOrder from '../addOrder/DeliveryOrder';
import SendIcon from '@mui/icons-material/Send';
import Service from './Service';
import BusinessDetails from '../businessDetails/BusinessDetails';
function UserHomePage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Header/>
    <div style={{position:'absolute', left:'0',top:'25%' }}><BusinessDetails/></div>
    <React.Fragment>
      <Button
       variant="outlined"
       onClick={handleClickOpen}
       sx={{
         position: "absolute",
         top:'15%',
         left:'25%',
         width:'50%',
       }}
      >
        להזמנת שליחויות לחץ כאן
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <DeliveryOrder/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button variant="outlined" onClick={handleClose}>חזרה</Button>
        <Button variant="contained" endIcon={<SendIcon />} onClick={handleClose} autoFocus>
              סיום
            </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    <div style={{position:'absolute', left:'20%',right:'10%',top:'25%' }}> <Service/></div>
    </>
  );
}
export default UserHomePage