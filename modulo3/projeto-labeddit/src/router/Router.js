import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostListPage from "../pages/PostListPage/PostListPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route index element={<PostListPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/cadastro" element={<SignUpPage />} />
			<Route path="/post/:id" element={<PostPage />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	</BrowserRouter>
);

export default Router;
