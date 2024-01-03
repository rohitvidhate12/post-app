import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Filter({ setInputValue, inputValue, sortBy, onChange }) {
  return (
    <Box sx={{ marginY: 5 }}>
      <input type="text" value={inputValue} onChange={setInputValue} />
      <FormControl sx={{ minWidth: 400 }}>
        <InputLabel id="demo-simple-select-label">
          Select Sort Criteria
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Select Sort Criteria"
          onChange={onChange}
        >
          <MenuItem value={"id"}>Id</MenuItem>
          <MenuItem value={"title"}>Title</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Filter;
