import { useLocation, useNavigate } from "react-router-dom";
import {
	goToLoginPage,
	goToPostListPage,
} from "../../router/coordinator";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { ImageLogo } from "./styled";
import Logo from "../../assets/logo.svg";

const Header = () => {
	const token = localStorage.getItem("token");
	const { pathname } = useLocation();
	const navigate = useNavigate();
	let isLogin = false;

	if (pathname === "/" || pathname === "/#") isLogin = true;

	const logoutUser = () => {
		if (token) {
			localStorage.removeItem("token");
		}
		goToLoginPage(navigate);
	};

	return isLogin ? (
		""
	) : (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						<ImageLogo
							src={Logo}
							alt={""}
							onClick={() => goToPostListPage(navigate)}
						/>
					</Typography>
					<Button color="inherit" onClick={logoutUser}>
						{token ? "Logout" : "Entrar"}
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
