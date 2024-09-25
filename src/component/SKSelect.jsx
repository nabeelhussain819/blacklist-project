import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SKSelect(props) {
  const { borderBottomColor, inputColor, dropDownColor, color, onGenderChange } = props;
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
    onGenderChange(event.target.value); // Invoke the callback with the selected value
  };

  return (
    <>
      <FormControl variant="standard" className="SKSelect-Form">
        <InputLabel
          id="demo-simple-select-standard-label"
          sx={{
            color: color,
          }}
        >
          Select Gender
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={gender}
          onChange={handleChange}
          label="Male"
          sx={{
            // Bottom border color
            "& .MuiInput-underline:before": {
              borderBottomColor: borderBottomColor,
            },
            // Bottom border color when focused
            "& .MuiInput-underline:after": {
              borderBottomColor: borderBottomColor,
            },
            // Dropdown menu color
            "& .MuiSelect-menu": {
              color: dropDownColor,
            },
            // Dropdown arrow color
            "& .MuiSvgIcon-root": {
              color: borderBottomColor,
            },
            // Text color
            "& .MuiInputBase-input": {
              color: inputColor,
            },
          }}
        >
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Other'}>Others</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
