import React from "react";

import styles from "./Nav.module.css";

const Nav = () => {
	return (
		<div className={styles["main-nav"]}>
			<div className={styles["main-nav-body"]} />
			<div className={styles["text-wrapper-5"]}>KDL</div>
			<img
				className={styles["iconly-bold-home"]}
				alt="Iconly bold home"
				src="https://generation-sessions.s3.amazonaws.com/1677a6d5463ee1e9d6f9b77891b2ab1e/img/iconly-bold-home@2x.png"
			/>
			<img
				className={styles["iconly-bold-chart"]}
				alt="Iconly bold chart"
				src="https://generation-sessions.s3.amazonaws.com/1677a6d5463ee1e9d6f9b77891b2ab1e/img/iconly-bold-chart@2x.png"
			/>
		</div>
	);
};

export default Nav;
