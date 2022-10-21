import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ContainerCardSkeleton } from "./Style";

export function CardSkeleton({ cards }) {
	return (
		<ContainerCardSkeleton>
			{Array(cards)
				.fill(0)
				.map((_, i) => {
					return (
						<div className="card-skeleton" key={i}>
							<Skeleton width={165} height={255} />
						</div>
					);
				})}
		</ContainerCardSkeleton>
	);
}
