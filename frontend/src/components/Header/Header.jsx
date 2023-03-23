import { Typography, Paper, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import { tokens } from "../../theme";

function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Paper
      elevation="10"
      mb="30px"
      sx={{
        background: `linear-gradient(to left, ${colors.primary[400]}, ${colors.primary[700]})`,
        p: "0.5rem 2rem",
      }}
    >
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0", letterSpacing: "0.15em" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.safran[500]}>
        {subtitle}
      </Typography>
    </Paper>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
export default Header;
