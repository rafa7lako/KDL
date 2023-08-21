import React from "react";
import styles from "./Regal.module.css";
import RegalSolo from "./RegalSolo/RegalSolo";

const Regal = () => {
	return (
		<div className={styles.regal}>
			<div className={styles.regals}>
				<RegalSolo />
				<RegalSolo />
				<RegalSolo />
				<RegalSolo />
				<RegalSolo />
				<RegalSolo />
				<RegalSolo />
				<RegalSolo />
				<RegalSolo />
			</div>
		</div>
	);
};

export default Regal;
