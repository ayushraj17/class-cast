import React, { useEffect } from "react";
import style from "../styles/profile.module.css";
import { FiBell } from "react-icons/fi";
import { BiSliderAlt } from "react-icons/bi";
import { HiOutlineChat } from "react-icons/hi";
const ProfileDisplay = ({ online, trainer, name, subtitle, children }) => {
	const renderIcons = () => {
		if (trainer) {
			return (
				<>
					<div></div>
					<HiOutlineChat className="icon" />
				</>
			);
		}
		return (
			<>
				<FiBell className="icon" />
				<BiSliderAlt className="icon" />
			</>
		);
	};
	useEffect(() => {
		renderIcons();
	}, []);
	return (
		<div className={style.container}>
			<div className={style.photo}>
				{children}
				{/* <IoLogoOctocat className="icon" /> */}
				{online && <div className={style.online}>●</div>}
			</div>
			<div className={style.details}>
				<h2>{name}</h2>
				<p>{subtitle}</p>
			</div>
			<div className={style.icons}>{renderIcons()}</div>
		</div>
	);
};

export default ProfileDisplay;
