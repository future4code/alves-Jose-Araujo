import React, { useState } from "react";
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
import axios from "axios";
import { BASE_URL } from "../../constants/url";

const PostListPage = () => {
	useProtectedPage();
	const [like, setLike] = useState(false);
	const [dislike, setDisLike] = useState(false);

	const [data, loading] = UseRequestData([], "/posts");
	const [form, handleInputChange, clear] = useForm({
		title: "",
		body: "",
	});

	const postVoteLike = (id) => {
		const body = {
			direction: 1,
		};

		if (like) {
			deleteVote(id, like, setLike);
			setLike(!like);
		} else {
			axios
				.post(`${BASE_URL}/posts/${id}/votes`, body, {
					headers: { Authorization: localStorage.getItem("token") },
				})
				.then((response) => {
					setLike(!like);
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	const postVoteDislike = (id) => {
		const body = {
			direction: -1,
		};

		if (dislike) {
			deleteVote(id, dislike, setDisLike);
			setDisLike(!like);
		} else {
			axios
				.put(`${BASE_URL}/posts/${id}/votes`, body, {
					headers: { Authorization: localStorage.getItem("token") },
				})
				.then((response) => {
					setDisLike(!like);
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	const deleteVote = (id, choiceVote, choiceSetVote) => {
		axios
			.delete(`${BASE_URL}/posts/${id}/votes`, {
				headers: { Authorization: localStorage.getItem("token") },
			})
			.then((response) => {
				choiceSetVote(!choiceVote);
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const onSubmitPost = (e) => {
		e.preventDefault();
		CreatePost(form, clear);
	};

	const mappedCard = data?.map((comment) => {
		return (
			<CardList
				key={comment.id}
				post={comment}
				postVoteLike={postVoteLike}
				postVoteDislike={postVoteDislike}
				like={like}
				dislike={dislike}
			/>
		);
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
