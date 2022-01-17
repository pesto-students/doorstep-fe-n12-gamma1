import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDown({ values, variant }) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl variant={variant} fullWidth>
      {/* <InputLabel id="demo-simple-select-label">Categories</InputLabel> */}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Age"
        onChange={handleChange}
      >
        {values.map((category, index) => {
          return <MenuItem value={category.id}>{category.name}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}
