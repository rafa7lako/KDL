import React from "react";

import styles from "./Regalsolo.module.css";
import RegalLevel from "./RegalLevel";

const Regal = (props) => {
	return (
		<div className={styles["regal-solo"]}>
			<RegalLevel />
			<RegalLevel />
			<RegalLevel />
			<RegalLevel />
			<p>{props.numbersRange}</p>
		</div>
	);
};

export default Regal;
