import Tilt from "react-parallax-tilt";
import * as s from "./Style";

import { Modal } from "../Modal/Modal";
import "react-loading-skeleton/dist/skeleton.css";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

export function Cards({
	openModal,
	showModal,
	setShowModal,
	flipCard,
	filterCardTarot,
	tarotCards,
	isLoading,
}) {
	return (
		<s.ContainerTarotCards>
			<s.TarotCards>
				{isLoading && <CardSkeleton cards={78} />}

				{flipCard &&
					tarotCards.cards?.map((card) => {
						return (
							<Tilt key={card.name}>
								<s.ImageTarot
									src={tarotCards.imageBackCard}
									alt={card?.name}
									loading="lazy"
									onClick={() => openModal(card.name)}
								/>
							</Tilt>
						);
					})}

				{!flipCard &&
					tarotCards.cards?.map((card) => {
						return (
							<Tilt key={card.name}>
								<s.ImageTarot
									src={tarotCards.imagesUrl + card.image}
									alt={card.name}
									loading="lazy"
								/>
							</Tilt>
						);
					})}

				<Modal
					showModal={showModal}
					setShowModal={setShowModal}
					filterCardTarot={filterCardTarot}
					tarotCards={tarotCards}
				/>
			</s.TarotCards>
		</s.ContainerTarotCards>
	);
}
