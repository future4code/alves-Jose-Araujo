import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../router/coordinator";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { ImageLogo } from "./styled";
import Logo from "../../assets/logo.svg";

const Header = () => {
	const navigate = useNavigate();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						<ImageLogo src={Logo} alt={""} />
					</Typography>
					<Button
						color="inherit"
						onClick={() => goToLoginPage(navigate)}
					>
						Entrar
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
