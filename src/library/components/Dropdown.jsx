import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Content from "./Content";
import OutlinedInput from "@mui/material/OutlinedInput";

import {
  createStyles,
  fade,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {

    '& .MuiOutlinedInput-notchedOutline':{
      // borderRight: 0,
      borderRadius: '12px 0 0 12px',
    },
  },
})(OutlinedInput);

export default function DropDown({ values, variant }) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Content className="DropDown">
      <FormControl variant={variant} fullWidth>

        <Select
          sx={{borderRadius:"20px 0px 0px 20px", maxHeight:'50px'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
          input={<CssTextField sx={{maxHeight:'50px'}}/>}
        >
          {values.map((category, index) => {
            return <MenuItem value={category.id}>{category.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Content>
  );
}
