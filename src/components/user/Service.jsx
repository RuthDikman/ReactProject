import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Button from '@mui/material/Button';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import DepartureBoardRoundedIcon from '@mui/icons-material/DepartureBoardRounded';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import RvHookupIcon from '@mui/icons-material/RvHookup';
function Service() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 2,
          width: 150,
          height: 128,
        },
      }}
    >
       <Paper  elevation={3}>
        <LocalShippingOutlinedIcon style={{ fontSize: "4rem" }}/>
        <Button size="medium" style={{color: "black"}}>שליחויות מהיום למחר</Button>
        </Paper>
        <Paper  elevation={3}>
        <TwoWheelerIcon style={{ fontSize: "4rem" }}/>
        <Button size="medium" style={{color: "black"}} >משלוחים לעסקים קטנים</Button>
        </Paper>
        <Paper  elevation={3}>
        <GavelRoundedIcon style={{ fontSize: "4rem" }}/>
        <Button size="medium" style={{color: "black"}} >שליחויות משפטיות</Button>
        </Paper>
        <Paper  elevation={3}>
        <DepartureBoardRoundedIcon style={{ fontSize: "4rem" }}/>
        <Button size="medium" style={{color: "black"}} >שליחויות מהיום להיום</Button>
        </Paper>
        <Paper  elevation={3}>
        <RvHookupIcon style={{ fontSize: "4rem" }}/>
        <Button size="medium" style={{color: "black"}} >משלוחים לנקודת חלוקה</Button>
        </Paper>
    </Box>
  );
}
export default Service