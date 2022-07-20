export const goToTripsList = (navigate) => {
	navigate("/trips/list");
};

export const goToApplication = (navigate) => {
	navigate("/trips/application");
};

export const goToHome = (navigate) => {
	navigate("/");
};

export const goBack = (navigate) => {
	navigate(-1);
};

export const goToLogin = (navigate) => {
	navigate("/login");
};

export const goToAdminList = (navigate) => {
	navigate("/admin/trips/list");
};

export const goToAdminCreate = (navigate) => {
	navigate("/admin/trips/create");
};

export const goToAdminDetails = (navigate, id) => {
	navigate(`/admin/trips/${id}`);
};
