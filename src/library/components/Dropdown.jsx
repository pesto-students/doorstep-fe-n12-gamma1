import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Content from "./Content";
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import {
  createStyles,
  fade,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import { Icon } from "@mui/material";

function DropDownIcon() {
return <ArrowDropDownIcon sx={{color:'green'}}/>;
}

const CssTextField = withStyles({
  root: {

    '& .MuiOutlinedInput-notchedOutline':{
      borderRight: 0,
      borderRadius: '12px 0 0 12px',
      border: '0px',
      
    },
  },
})(OutlinedInput);

export default function DropDown({ values, variant }) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    
      

        <Select
          sx={{borderRadius:"12px 0px 0px 12px",backgroundColor:'#F9F9F9',fontWeight:'bold'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
          input={<CssTextField sx={{backgroundColor:'#F9F9F9'}}/>}
          // IconComponent = {DropDownIcon}
          IconComponent = {ArrowDropDownIcon}
        >
          {values && values.length!==0?values.map((category, index) => {
            return <MenuItem value={category.id}>{category.name}</MenuItem>;
          }):''}
        </Select>
      
    
  );
}
