import React from "react";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";

import {
	ScreenContainer,
	InputsContainer,
	StyledButton,
} from "./styled";

import UseRequestData from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";
import useForm from "../../hooks/useForm";
import { CreatePost } from "../../services/posts";
import CardList from "../../components/Card/CardList";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostListPage = () => {
	useProtectedPage();
	const [data, loading] = UseRequestData([], "/posts");

	const [form, handleInputChange, clear] = useForm({
		title: "",
		body: "",
	});

	const onSubmitPost = (e) => {
		e.preventDefault();
		CreatePost(form, clear);
	};

	const mappedCard = data?.map((comment) => {
		return <CardList key={comment.id} post={comment} />;
	});

	return (
		<ScreenContainer>
			<form onSubmit={onSubmitPost}>
				<InputsContainer>
					<TextField
						label="Título do post"
						type="text"
						margin={"dense"}
						name={"title"}
						value={form.title}
						onChange={handleInputChange}
						fullWidth
						required
						autoFocus
					/>
					<TextField
						label="Escreva seu post"
						type="text"
						margin={"dense"}
						name={"body"}
						value={form.body}
						onChange={handleInputChange}
						rows={4}
						fullWidth
						multiline
						required
					/>
				</InputsContainer>

				<Stack direction="column" spacing={2}>
					<StyledButton
						sx={{
							borderRadius: 25,
							height: 51,
							boxShadow: 0,
							color: "white",
						}}
						fullWidth
						size={"large"}
						variant={"contained"}
						type={"submit"}
					>
						Postar
					</StyledButton>
				</Stack>
			</form>
			{loading ? <Loading /> : mappedCard}
		</ScreenContainer>
	);
};

export default PostListPage;
