import React from "react";

import styles from "./Regalsolo.module.css";
import RegalLevel from "./RegalLevel";

const Regal = () => {
	return (
		<div className={styles["regal-solo"]}>
			<RegalLevel />
			<RegalLevel />
			<RegalLevel />
			<RegalLevel />
		</div>
	);
};

export default Regal;
