import { createTheme } from "@mui/material/styles";
import { primaryColor, neutralColor, contrastText } from "./colors";

const theme = createTheme({
	palette: {
		primary: {
			main: primaryColor,
			contrastText: contrastText,
		},
		text: {
			primary: neutralColor,
		},
	},
});

export default theme;
