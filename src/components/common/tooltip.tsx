import {type ReactNode} from "react";
import {PlacesType, Tooltip as ReactTooltip} from "react-tooltip";

type Props = {
	place?: PlacesType;
	children?: ReactNode;
	text: string;
	variant?: "dark" | "light";
};

function Tooltip({children, place = "top", text, variant = "dark"}: Props) {
	return (
		<>
			<a
				className="z-20"
				data-tooltip-id="mcd-tooltip"
				data-tooltip-content={text}
				data-tooltip-place={place}
			>
				{children}
			</a>
			<ReactTooltip variant={variant} id="mcd-tooltip" place={place} />
		</>
	);
}

export default Tooltip;
