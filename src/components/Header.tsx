import axios from "axios";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { myStore } from "../store/Store";
import { Card } from "./Card";
import { Select } from "./Select";
import finder from "../assets/finder.svg";
type Props = {};

const categories = [
	"all",
	"art",
	"biography",
	"computers",
	"History",
	"medical",
	"poetry",
];
const sorts = ["relevance", "newest"];
export const Header = observer(() => {
	return (
		<header className="p-10 bg-slate-400 md:p-0">
			<h1 className="text-center text-4xl font-bold text-slate-50 py-4">
				Search for books
			</h1>
			<div className="flex items-center justify-center gap-2 ">
				<input
					autoFocus
					className="border-2 p-2 rounded-md w-2/3"
					type="text"
					onChange={(e) => {
						e.preventDefault();
						myStore.changeValue(e.target.value);
						myStore.setId("");
					}}
					onKeyDown={(e) => {
						e.key === "Enter" && myStore.findBooks();
					}}
					tabIndex={0}
				/>
				<button className="font-bold" onClick={myStore.findBooks}>
					<img src={finder} alt="finder" className="h-6" />
				</button>
			</div>
			<div>
				<div className="p-3 flex justify-center w-auto gap-4 flex-row md:w-full md:flex-col">
					<Select options={categories} name="Categories" />
					<Select options={sorts} name="Sorting by" />
				</div>
			</div>
		</header>
	);
});
