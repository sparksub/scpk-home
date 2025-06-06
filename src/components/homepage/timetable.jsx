import React from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import TimeCard from "../common/timecard";

import "./styles/works.css";

const Timetable = () => {
	return (
		<div className="works">
			<TimeCard
				icon={faClock}
				title="예배 & 모임 안내"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">주일 예배</div>
							<div className="work-duration">주일, 오후 3시</div>
						</div>

						<div className="work">
							<div className="work-title">수요 예배</div>
							<div className="work-duration">수요일, 오후 8시</div>
						</div>

						<div className="work">
							<div className="work-title">일청년부 모임</div>
							<div className="work-duration">주일, 오후 1시 50분</div>
						</div>

						<div className="work">
							<div className="work-title">로마서 강해</div>
							<div className="work-duration">화요일, 오후 9시</div>
						</div>

						<div className="work">
							<div className="work-title">사도행전 강해</div>
							<div className="work-duration">금요일, 오후 9시</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Timetable;
