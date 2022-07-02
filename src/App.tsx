import { observer } from "mobx-react-lite";
import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export const App = observer(() => {
	return (
		<div className="App">
			<Header />
			<Main />
		</div>
	);
});
