import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/timecard.css";

const TimeCard = (props) => {
	const { icon, title, body } = props;
	return (
		<div className="timecard">
			<div className="timecard-container">
				<div className="timecard-header">
					<div className="timecard-icon">
						<FontAwesomeIcon icon={icon} />
					</div>
					<div className="timecard-title">{title}</div>
				</div>
				<div className="timecard-body">
					<div className="timecard-text">{body}</div>
				</div>
			</div>
		</div>
	);
};

export default TimeCard;
