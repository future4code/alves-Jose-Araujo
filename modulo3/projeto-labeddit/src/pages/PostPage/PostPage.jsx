import React, { useState } from "react";
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
import axios from "axios";
import { BASE_URL } from "../../constants/url";

const PostPage = () => {
	useProtectedPage();
	const { id } = useParams();
	const [like, setLike] = useState(false);
	const [dislike, setDisLike] = useState(false);

	const [data, loading] = UseRequestData([], "/posts");
	const [comments] = useRequestComments(id);
	const [form, handleInputChange, clear] = useForm({
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
				.post(`${BASE_URL}/comments/${id}/votes`, body, {
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
				.put(`${BASE_URL}/comments/${id}/votes`, body, {
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
			.delete(`${BASE_URL}/comments/${id}/votes`, {
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
		return (
			<CardList
				key={post.id}
				post={post}
				postVoteLike={postVoteLike}
				postVoteDislike={postVoteDislike}
			/>
		);
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
