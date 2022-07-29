export const goToLoginPage = (navigate) => {
	navigate("/");
};

export const goToPostListPage = (navigate) => {
	navigate("/post");
};

export const goToSignUpPage = (navigate) => {
	navigate("/cadastro");
};

export const goToPost = (navigate, id) => {
	navigate(`/post/${id}`);
};
