import { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { useSpring, animated } from "react-spring";
import * as s from "./Style";

export function Modal({
	showModal,
	setShowModal,
	filterCardTarot,
	tarotCards,
}) {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	const animation = useSpring({
		config: {
			duration: 300,
		},
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
	});

	return (
		<>
			{showModal ? (
				<s.ModalContainer ref={modalRef} onClick={closeModal}>
					<animated.div style={animation}>
						<s.ModalWrapper showModal={showModal}>
							<Tilt scale={1.1}>
								<s.ModalImg
									src={`${tarotCards?.imagesUrl}${filterCardTarot?.image}`}
									alt=""
									loading="lazy"
								/>
							</Tilt>
							<s.ModalContent>
								<h1>{filterCardTarot?.name}</h1>
								<p>Para saber mais sobre a carta</p>
								<button>CLIQUE AQUI</button>
							</s.ModalContent>
							<s.CloseModalButton
								aria-label="Close modal"
								onClick={() => setShowModal((prev) => !prev)}
							>
								<span>X</span>
							</s.CloseModalButton>
						</s.ModalWrapper>
					</animated.div>
				</s.ModalContainer>
			) : null}
		</>
	);
}
