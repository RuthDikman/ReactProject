import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DepartureBoardRoundedIcon from '@mui/icons-material/DepartureBoardRounded';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import RvHookupIcon from '@mui/icons-material/RvHookup';
function ListOfServices() {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth:500,
        bgcolor: 'background.paper',
        position:'absolute',
        right:'3%',
        top:'20%',
        overflow: 'auto',
        maxHeight: 500,
        
      }}
      subheader={<li />}
    >
 <li>
        <ul>
          <ListItem sx={{paddingBottom:'5%', textAlign:'right'}}>
            <ListItemText primary="שליחויות מהיום למחר" sx={{paddingRight:'10%'}}/>
            <LocalShippingOutlinedIcon />
          </ListItem>
          <ListItem sx={{paddingBottom:'5%', textAlign:'right'}}>
            <ListItemText primary="שליחויות משפטיות" sx={{paddingRight:'10%'}}/>
            <GavelRoundedIcon />
          </ListItem>
          <ListItem sx={{paddingBottom:'5%', textAlign:'right'}}>
            <ListItemText primary="שליחויות מהיום להיום" sx={{paddingRight:'10%'}}/>
            <DepartureBoardRoundedIcon />
          </ListItem>
          <ListItem sx={{paddingBottom:'5%', textAlign:'right'}}>
            <ListItemText primary="שליחויות לעסקים קטנים" sx={{paddingRight:'10%'}}/>
            <TwoWheelerIcon />
          </ListItem>
          <ListItem sx={{paddingBottom:'5%', textAlign:'right'}}>
            <ListItemText primary="שליחויות לנקודות חלוקה" sx={{paddingRight:'10%'}}/>
            <RvHookupIcon />
          </ListItem>
          <ListItem sx={{paddingBottom:'5%', textAlign:'right'}}>
            <ListItemText primary="שליחויות מהיום למחר" sx={{paddingRight:'10%'}}/>
            <LocalShippingOutlinedIcon />
          </ListItem>
          <ListItem sx={{paddingBottom:'5%', textAlign:'right'}}>
            <ListItemText primary="שליחויות משפטיות" sx={{paddingRight:'10%'}}/>
            <GavelRoundedIcon />
          </ListItem>
          <ListItem sx={{paddingBottom:'5%', textAlign:'right'}}>
            <ListItemText primary="שליחויות מהיום להיום" sx={{paddingRight:'10%'}}/>
            <DepartureBoardRoundedIcon />
          </ListItem>
          <ListItem sx={{paddingBottom:'5%', textAlign:'right'}}>
            <ListItemText primary="שליחויות לעסקים קטנים" sx={{paddingRight:'10%'}}/>
            <TwoWheelerIcon />
          </ListItem>
          <ListItem sx={{paddingBottom:'5%', textAlign:'right'}}>
            <ListItemText primary="שליחויות לנקודות חלוקה" sx={{paddingRight:'10%'}}/>
            <RvHookupIcon />
          </ListItem>
        </ul>
      </li>
    </List>
  );
}
export default ListOfServices