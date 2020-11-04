import React from "react";
import style from "../styles/sideBar.module.css";
import Card from "./Card";
import Hero from "./Hero";
import ProfileDisplay from "./ProfileDisplay";
import ProgressSqaure from "./ProgressSqaure";
import { BsThreeDots } from "react-icons/bs";
import { FcBusinessman, FcBusinesswoman, FcManager } from "react-icons/fc";
import { FaHeartbeat } from "react-icons/fa";
import { GiShinyApple } from "react-icons/gi";
import { AiOutlineFieldTime } from "react-icons/ai";

const SideBar = () => {
	return (
		<div className={style.container}>
			<div className={style.blueBackground}>
				<ProfileDisplay name="Ayush Raj" subtitle="Free Account">
					<FcManager className="icon" />
				</ProfileDisplay>
				<div className={style.title}>Health</div>
				<div className={style.progress}>
					<ProgressSqaure
						description="Time"
						title="6:24"
						width="20%"
						background="blue"
					>
						<AiOutlineFieldTime
							className="icon"
							style={{ background: "blue" }}
						/>
					</ProgressSqaure>
					<ProgressSqaure
						description="Bpm"
						title="120"
						width="60%"
						background="red"
					>
						<FaHeartbeat className="icon" />
					</ProgressSqaure>
					<ProgressSqaure
						description="Kcal"
						title="1.84"
						width="90%"
						background="lightgreen"
					>
						<GiShinyApple
							className="icon"
							style={{ background: "lightgreen" }}
						/>
					</ProgressSqaure>
				</div>
				<Hero />
				<div className={style.title}>Today's Training</div>
				<Card
					details={{
						head: "Box",
						club: "SportsCub",
						time: "10:00",
						head1: "40",
						sub1: "Warm-up",
						head2: "20",
						sub2: "Strech",
						container: "blue",
					}}
				/>
				<Card
					details={{
						head: "Crossfit",
						club: "SportsCub",
						time: "12:00",
						head1: "20",
						sub1: "Warm-up",
						head2: "20",
						sub2: "Pull-ups",
						container: "red",
					}}
				/>
				<BsThreeDots
					className="icon"
					style={{ margin: "auto", display: "flex", justifyContent: "center" }}
				/>
				<div className={style.title}>Your Trainers</div>
			</div>
			<div className={style.trainers}>
				<ProfileDisplay online trainer name="John Smith" subtitle="MMA coach">
					<FcBusinessman className="icon" />
				</ProfileDisplay>
				<ProfileDisplay
					online
					trainer
					name="Alisa Jane"
					subtitle="Boxing coach"
				>
					<FcBusinesswoman className="icon" />
				</ProfileDisplay>
			</div>
		</div>
	);
};

export default SideBar;
