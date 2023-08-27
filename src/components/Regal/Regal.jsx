import React from "react";
import styles from "./Regal.module.css";

import RegalSolo from "./RegalSolo/RegalSolo";

const Regal = () => {
	return (
		<div className={styles.regal}>
			<div className={styles.regals}>
				<RegalSolo numbersRange={'1 do 10'}/>
				<RegalSolo numbersRange={'1 do 10'}/>
				<RegalSolo numbersRange={'1 do 10'}/>
				<RegalSolo numbersRange={'1 do 10'}/>
				<RegalSolo numbersRange={'1 do 10'}/>
				<RegalSolo numbersRange={'1 do 10'}/>
				<RegalSolo numbersRange={'1 do 10'}/>
				<RegalSolo numbersRange={'1 do 10'}/>
				<RegalSolo numbersRange={'1 do 10'}/> 
			</div>
		</div>
	);
};

export default Regal;
