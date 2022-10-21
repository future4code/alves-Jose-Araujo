import { useState, useEffect } from "react";
import { GlobalStyle } from "./style/Global";
import axios from "axios";

import { Cards } from "./components/cards/Cards";
import { Header } from "./components/Header/Header";
import { BASE_URL } from "./constants/BASE_URL";

import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function App() {
	const [tarotCards, setTarotCards] = useState([]);
	const [nameTarot, setNameTarot] = useState("");

	const [flipCard, setFlipCard] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		axios
			.get(`${BASE_URL}`)
			.then((res) => {
				setTimeout(() => {
					setTarotCards(res.data);
					setIsLoading(false);
				}, 1000);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	// Retornar um array usando filter.
	const filterCardTarot = tarotCards.cards?.find((card) => {
		return card.name === nameTarot;
	});

	const openModal = (nameTarot) => {
		setNameTarot(nameTarot);
		setShowModal((prev) => !prev);
	};

	const onFlipCard = () => {
		tarotCards.cards?.sort(() => Math.random() - 0.5);
		setFlipCard(!flipCard);
		setNameTarot("");
	};

	return (
		<>
			<SkeletonTheme baseColor="#202020" highlightColor="#444">
				<GlobalStyle />
				<Header onFlipCard={onFlipCard} />
				<Cards
					openModal={openModal}
					showModal={showModal}
					setShowModal={setShowModal}
					tarotCards={tarotCards}
					flipCard={flipCard}
					filterCardTarot={filterCardTarot}
					isLoading={isLoading}
					nameTarot={nameTarot}
				/>
			</SkeletonTheme>
		</>
	);
}
