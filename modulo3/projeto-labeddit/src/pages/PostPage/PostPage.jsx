import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";

import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import {
	ScreenContainer,
	InputsContainer,
	StyledButton,
} from "./styled";

import CardList from "../../components/Card/CardList";
import UseRequestData from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";
import { CreateComment } from "../../services/posts";
import useForm from "../../hooks/useForm";
import useRequestComments from "../../hooks/useRequestComments";

const PostPage = () => {
	useProtectedPage();
	const { id } = useParams();
	const [data, loading] = UseRequestData([], "/posts");
	const [comments] = useRequestComments(id);
	const [form, handleInputChange, clear] = useForm({
		body: "",
	});

	const onSubmitComment = (e) => {
		e.preventDefault();
		CreateComment(form, id, clear);
	};

	const mappedPosts = data.map((post) => {
		return post.id === id ? (
			<CardList key={post.id} post={post} />
		) : (
			""
		);
	});

	const mappedComments = comments.map((post) => {
		return <CardList key={post.id} post={post} />;
	});

	return (
		<ScreenContainer>
			{mappedPosts}
			<form onSubmit={onSubmitComment}>
				<InputsContainer>
					<TextField
						label="Adicionar comentário"
						type="text"
						margin={"dense"}
						name={"body"}
						value={form.body}
						onChange={handleInputChange}
						rows={4}
						fullWidth
						multiline
						required
						autoFocus
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
						Responder
					</StyledButton>
				</Stack>
			</form>
			{loading ? <Loading /> : mappedComments}
		</ScreenContainer>
	);
};

export default PostPage;
