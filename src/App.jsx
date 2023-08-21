import { useState } from "react";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Regal from "./components/Regal/Regal";

function App() {
	return (
		<>
			<div className="overlap-wrapper">
				<div className="overlap">
					<div className="app-body">
						<div className="comp-nav">
							<img
								className="comp-nav-line"
								alt="Comp nav line"
								src="https://generation-sessions.s3.amazonaws.com/1677a6d5463ee1e9d6f9b77891b2ab1e/img/comp-nav-line.svg"
							/>
							<div className="comp-nav-title">Accounting</div>
							<div className="comp-nav-anchors">
								<div className="text-wrapper">Overview</div>
								<div className="div">Transactions</div>
								<div className="overlap-group">
									<div className="text-wrapper-2">Reports</div>
									<div className="text-wrapper-3">Hire Bookkeeper</div>
								</div>
							</div>
							<div className="comp-nav-elements">
								<div className="comp-nav-searchbar" />
								<div className="comp-nav-option" />
								<div className="comp-nav-option-2" />
								<div className="comp-nav-option-3" />
								<div className="profile-pic" />
							</div>
						</div>
						<div className="sub-title">
							<div className="sub-title-text">Cash flow</div>
							<div className="sub-btn" />
							<div className="sub-btn-2" />
						</div>
						<Regal />
						<div className="isle">
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
						</div>
						<Nav />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
