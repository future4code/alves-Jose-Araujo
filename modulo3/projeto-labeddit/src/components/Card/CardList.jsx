import React from "react";
import { goToPost } from "../../router/coordinator";
import { useLocation, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import ArrowUp from "../../assets/arrow-up.svg";
import ArrowDown from "../../assets/arrow-down.svg";
import ChatBallon from "../../assets/chat-ballon.svg";

const CardList = ({ post, createPostVote }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	return (
		<div>
			<Box mt={2} width="24rem">
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
									<img
										src={ArrowUp}
										alt={""}
										onClick={() => createPostVote(post.id)}
									/>
									{post.voteSum}
									<img src={ArrowDown} alt={""} />
								</div>

								{pathname === "/post" ? (
									<div className="CardMessage">
										<img
											src={ChatBallon}
											alt={""}
											onClick={() => goToPost(navigate, post.id)}
										/>
										<p>{post.commentCount}</p>
									</div>
								) : (
									""
								)}
							</div>
						</Typography>
					</CardActions>
				</Card>
			</Box>
		</div>
	);
};

export default CardList;
