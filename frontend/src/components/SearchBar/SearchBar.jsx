import { Box, InputBase, IconButton, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { tokens } from "../../theme";

function SearchBar({ handleSearchNote }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display="flex"
      backgroundColor={colors.primary[500]}
      borderRadius="10px"
      sx={{
        mb: "20px",
      }}
    >
      <InputBase
        sx={{
          ml: 2,
          flex: 1,
          color: colors.grey[300],
          "&:placeholder": {
            color: colors.grey[300],
          },
        }}
        onChange={(event) => handleSearchNote(event.target.value)}
        placeholder="Search..."
        type="text"
      />
      <IconButton type="button" sx={{ p: 1 }}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

export default SearchBar;
