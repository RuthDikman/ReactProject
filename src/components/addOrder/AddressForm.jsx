import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@material-ui/core/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
export default function AddressForm() {
  const [type, setType] = React.useState('');
  const classes = useStyles();
  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        השלמת הזמנה
      </Typography>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
      <FormControl variant="standard" sx={{ minWidth: 220 }}>
        <InputLabel id="demo-simple-select-standard-label">סוג משלוח</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={type}
          onChange={handleChange}
          required
          name="type"
          autoComplete="given-name"
          variant="standard"
          fullWidth
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}>משלוחים לעסקים קטנים</MenuItem>
          <MenuItem value={20}>שליחויות מהיום להיום</MenuItem>
          <MenuItem value={30}>שליחויות משפטיות</MenuItem>
          <MenuItem value={10}>שליחוית מהיום למחר</MenuItem>
          <MenuItem value={20}>משלוחים לנקודת חלוקה</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="שם"
            autoComplete="given-name"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="כתובת"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phon"
            name="phon"
            label="טלפון"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="כתובת מייל"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="מועד משלוח"/>
      </DemoContainer>
    </LocalizationProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}