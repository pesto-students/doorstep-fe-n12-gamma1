import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Content from "./Content";

const DropDown = ({ values, variant }) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Content className="DropDown">
      <FormControl variant={variant} fullWidth>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          sx={{ borderRadius: "20px 0px 0px 20px" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
        >
          {values.map((category, index) => {
            return <MenuItem value={category.id}>{category.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Content>
  );
};

export default DropDown;
