import { createTheme } from "@mui/material/styles";
import {
	primaryColor,
	neutralColor,
	contrastText,
	secondaryColor,
} from "./colors";

const theme = createTheme({
	palette: {
		primary: {
			main: primaryColor,
			contrastText: contrastText,
		},
		secondary: {
			main: secondaryColor,
		},
		text: {
			primary: neutralColor,
		},
	},
});

export default theme;
