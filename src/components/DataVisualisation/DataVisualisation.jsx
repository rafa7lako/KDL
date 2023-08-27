import React from "react";

import styles from "./DataVisualisation.module.css";
import Regal from "../Regal/Regal";

const DataVisualisation = () => {
	return (
		<div className={styles["data-visualisation"]}>
			<div className={styles["sub-title"]}>
				<div className={styles["sub-title-text"]}>Cash flow</div>
				<div className={styles["sub-btns"]}>
					<div className={styles["sub-btn"]} />
					<div className={styles["sub-btn-2"]} />
				</div>
			</div>

			<Regal />

			{/* <div className="isle">
        <div className="isle-solo">
            <div className="isle-c-group">
                <div className="div-2" />
                <div className="text-wrapper-4">C</div>
            </div>
            <div className="isle-b-group">
                <div className="div-2" />
                <div className="text-wrapper-4">B</div>
            </div>
            <div className="isle-a-group">
                <div className="isle-a" />
                <div className="text-wrapper-4">A</div>
            </div>
            <div className="isle-d-group">
                <div className="text-wrapper-4">D</div>
                <div className="div-2" />
            </div>
            <div className="isle-e-group">
                <div className="div-2" />
                <div className="text-wrapper-4">E</div>
            </div>
        </div>
    </div>
    <div className="box-sector">
        <div className="box-element">
            <div className="overlap-group-2">
                <p className="p">LI233 - AC177 - [...]</p>
                <img
                    className="iconly-bold-edit"
                    alt="Iconly bold edit"
                    src="https://generation-sessions.s3.amazonaws.com/1677a6d5463ee1e9d6f9b77891b2ab1e/img/iconly-bold-edit@2x.png"
                />
                <img
                    className="iconly-bold-delete"
                    alt="Iconly bold delete"
                    src="https://generation-sessions.s3.amazonaws.com/1677a6d5463ee1e9d6f9b77891b2ab1e/img/iconly-bold-delete@2x.png"
                />
            </div>
        </div>
    </div>
    <div className="table-comp">
        <div className="table-upper" />
    </div> */}
		</div>
	);
};

export default DataVisualisation;
