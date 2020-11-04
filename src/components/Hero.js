import React from "react";
import style from "../styles/hero.module.css";
import { FaBullhorn } from "react-icons/fa";

const Hero = () => {
	return (
		<div className={style.container}>
			<div className={style.image}>
				<FaBullhorn className="icon" />
			</div>
			<div className={style.details}>
				sign up for personal trainer to improve your results
				<button className={style.button}>Sign Up</button>
			</div>
		</div>
	);
};

export default Hero;
