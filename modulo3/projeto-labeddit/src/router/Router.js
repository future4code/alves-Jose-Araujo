import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostListPage from "../pages/PostListPage/PostListPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";

const Router = () => (
	<BrowserRouter>
		<Header />
		<Routes>
			<Route index exact element={<LoginPage />} />
			<Route path="/post" element={<PostListPage />} />
			<Route path="/cadastro" element={<SignUpPage />} />
			<Route path="/post/:id" element={<PostPage />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	</BrowserRouter>
);

export default Router;
