import React from "react";
import style from "../styles/progress.module.css";

const ProgressSqaure = ({
	children,
	description,
	title,
	width,
	background,
}) => {
	return (
		<div className={style.container}>
			<time className={style.time}>{title}</time>
			<div className={style.iconDesc}>
				{children}
				{/* <BsFillHeartFill className="icon" style={iconStyle} /> */}
				<span className={style.description}>{description}</span>
			</div>
			<div>
				<div className={style.meter}>
					<span style={{ width, background }}></span>
				</div>
				{/* <progress className={style.progressBar} value="32" max="100" /> */}
			</div>
		</div>
	);
};

export default ProgressSqaure;
