import {PlacesType, Tooltip as ReactTooltip} from "react-tooltip";

type Props = {
	place?: PlacesType;
};

function Tooltip({place = "top"}: Props) {
	return (
		<>
			<a
				data-tooltip-id="my-tooltip"
				data-tooltip-content="Hello world!"
				data-tooltip-place="top"
			>
				◕‿‿◕
			</a>
			<a data-tooltip-id="my-tooltip" data-tooltip-content="Hello to you too!">
				◕‿‿◕
			</a>
			<ReactTooltip id="my-tooltip" place={place} />
		</>
	);
}

export default Tooltip;
