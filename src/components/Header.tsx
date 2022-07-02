import axios from "axios";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { myStore } from "../store/Store";
import { Card } from "./Card";
import { Select } from "./Select";

type Props = {};

export const Header = observer(() => {
	return (
		<header className="p-10 bg-slate-400">
			<h1 className="text-center text-xl font-bold text-slate-50">
				Search for books
			</h1>
			<div className="flex items-center justify-center">
				<input
					className="border-2 "
					type="text"
					onChange={(e) => {
						e.preventDefault();
						myStore.changeValue(e.target.value);
					}}
				/>
				<button className="font-bold" onClick={myStore.findBooks}>
					Найти книги
				</button>
			</div>
			<div>
				<div className="mb-3 w-auto flex">
					<div></div>
					<Select name="Categories" />
					<Select name="Sorting by" />
				</div>
			</div>
		</header>
	);
});
