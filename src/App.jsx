import { useState } from "react";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Regal from "./components/Regal/Regal";
import DataVisualisation from "./components/DataVisualisation/DataVisualisation";

function App() {
	return (
		<>
			<div className="overlap-wrapper">
				<div className="overlap">
					<div className="app-body">
						<div className="storage-app-body">
							<div className="comp-nav">
								<img
									className="comp-nav-line"
									alt="Comp nav line"
									src="https://generation-sessions.s3.amazonaws.com/1677a6d5463ee1e9d6f9b77891b2ab1e/img/comp-nav-line.svg"
								/>
								<div className="comp-nav-title">Accounting</div>
								<div className="comp-nav-anchors">
									<a href="#" className="div_text">
										Transactions
									</a>
									<a href="#" className="text-wrapper">
										Overview
									</a>
									<a href="#" className="text-wrapper-2">
										Reports
									</a>
									<a href="#" className="text-wrapper-3">
										Hire Bookkeeper
									</a>
								</div>
								<div className="comp-nav-elements">
									<div className="comp-nav-searchbar" />
									<div className="comp-nav-option" />
									<div className="comp-nav-option-2" />
									<div className="comp-nav-option-3" />
									<div className="profile-pic" />
								</div>
							</div>
							<DataVisualisation />
						</div>

						<Nav />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
