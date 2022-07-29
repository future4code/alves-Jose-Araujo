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

const PostPage = () => {
	useProtectedPage();
	const { id } = useParams();
	const [data, loading] = UseRequestData([], `/posts/${id}/comments`);

	const [form, handleInputChange, clear] = useForm({
		body: "",
	});

	const onSubmitComment = (e) => {
		e.preventDefault();
		CreateComment(form, id, clear);
	};

	const mappedComments = data.map((post) => {
		return <CardList key={post.id} post={post} />;
	});

	return (
		<ScreenContainer>
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
