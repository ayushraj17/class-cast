import React from "react";
import style from "../styles/card.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
const Card = ({ details }) => {
	const { head, club, time, head1, sub1, head2, sub2, container } = details;
	return (
		<div className={container === "red" ? style.container : style.container2}>
			<div className={style.firstBox}>
				<h2 className={style.head}>{head}</h2>
				<div className={style.subtitle}>{club}</div>
				<time className={style.time}> {time}</time>
			</div>
			<div className={style.secondBox}>
				<div className={style.number}>{head1}</div>
				<div className={style.minutes}>min</div>
				<div className={style.status}>{sub1} </div>
			</div>
			<div className={style.secondBox}>
				<div className={style.number}>{head2}</div>
				<div className={style.minutes}>min</div>
				<div className={style.status}>{sub2}</div>
			</div>

			<div>
				<BsThreeDotsVertical className="icon" />
			</div>
		</div>
	);
};

export default Card;
