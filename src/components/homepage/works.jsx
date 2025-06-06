import React from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faLocationDot}
				title="오시는 길"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">예배 장소</div>
							<div className="work-subtitle">
								강서고 챔버홀 (서울특별시 양천구 목동중앙남로 27)
							</div>
						</div>
						<div className="work">
							
							<div className="work-title">교육관</div>
							<div className="work-subtitle">
								카페올리브 2층 (서울 양천구 목동중앙남로4길 16, 2층)
							</div>
						</div>

						<img
								src="./churchmap.png"
								alt="church map"
								className="work-image"
							/>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
