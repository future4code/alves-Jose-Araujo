import React from "react";

import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import ArrowUp from "../../assets/arrow-up.svg";
import ArrowDown from "../../assets/arrow-down.svg";
import ChatBallon from "../../assets/chat-ballon.svg";
import {
	ScreenContainer,
	InputsContainer,
	StyledButton,
} from "./styled";
import UseRequestData from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";
import useForm from "../../hooks/useForm";
import { CreatePost } from "../../services/posts";

const PostListPage = () => {
	const [data, loading] = UseRequestData();
	const [form, handleInputChange, clear] = useForm({
		title: "",
		body: "",
	});

	const onSubmitPost = (e) => {
		e.preventDefault();
		CreatePost(form, clear);
	};

	const mappedCard = data?.map((post) => {
		return (
			<Box mt={2} width="24rem" key={post.id}>
				<Card variant="outlined" margin="normal">
					<CardContent>
						<Typography
							sx={{ fontSize: 12 }}
							variant="h5"
							color="text.secondary"
							gutterBottom
						>
							Enviado por: {post.username}
						</Typography>

						<Typography variant="h5" component="div">
							{post.body}
						</Typography>
					</CardContent>
					<CardActions>
						<Typography
							sx={{ fontSize: 12 }}
							variant="h5"
							color="text.secondary"
							gutterBottom
						>
							<div className="CardContainer">
								<div className="CardActions">
									<img src={ArrowUp} alt={""} />
									{post.voteSum}
									<img src={ArrowDown} alt={""} />
								</div>

								<div className="CardMessage">
									<img src={ChatBallon} alt={""} />
									<p>{post.commentCount}</p>
								</div>
							</div>
						</Typography>
					</CardActions>
				</Card>
			</Box>
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
