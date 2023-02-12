import React from "react";
import "./App.css";
import Site from "./Site";

function App() {
	return (
		<div>
			<header>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
			</header>
			<div className="body">
				<Site />
			</div>
		</div>
	);
}

export default App;
