export const goToPostListPage = (navigate) => {
	navigate("/");
};

export const goToLoginPage = (navigate) => {
	navigate("/login");
};

export const goToSignUpPage = (navigate) => {
	navigate("/cadastro");
};

export const goToPost = (navigate, id) => {
	navigate(`/post/${id}`);
};
