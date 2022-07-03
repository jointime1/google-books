import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Triangle } from "react-loader-spinner";
import { BeatLoader } from "react-spinners";
import { myStore } from "../store/Store";
import { Card } from "./Card";

type Props = {};

export const Main = observer((props: Props) => {
	const books = myStore.books;

	return (
		<div className="p-3">
			<div className="text-center mb-4">Found {myStore.amount} result</div>
			{myStore.loader ? (
				<div className="flex justify-center">
					<BeatLoader loading />
				</div>
			) : (
				<div className="grid grid-cols-4 gap-3 md:grid-cols-2">
					{books.map((book) => (
						<Card key={book.id} {...book} />
					))}
				</div>
			)}
			<div className="w-full flex justify-center py-4">
				{books.length !== myStore.amount && (
					<button
						className="rounded-md ring-2 ring-blue-500 bg-stone-400 p-2 text-white "
						onClick={myStore.findMoreBooks}
					>
						Load more
					</button>
				)}
			</div>
		</div>
	);
});
