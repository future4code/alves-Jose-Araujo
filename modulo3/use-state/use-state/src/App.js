import Post from "./components/Post";

function App() {
	return (
		<>
			<h1>Post</h1>
			<Post
				nomeUsuario={"Carlos Araújo"}
				fotoUsuario={"https://picsum.photos/50/50"}
				fotoPost={"https://picsum.photos/200/150"}
			/>
		</>
	);
}

export default App;
