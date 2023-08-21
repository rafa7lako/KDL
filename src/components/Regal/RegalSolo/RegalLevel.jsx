import React from "react";

import styles from "./RegalLevel.module.css";
import RectangleBox from "./RectangleBox";

const RegalLevel = () => {
	return (
		<div className={styles["regal-level"]}>
			<RectangleBox />
			<RectangleBox />
			<RectangleBox />
		</div>
	);
};

export default RegalLevel;
