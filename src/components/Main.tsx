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
		<div>
			<div className="text-center">Found {myStore.amount} result</div>
			{myStore.loader ? (
				<div className="flex justify-center">
					<BeatLoader loading />
				</div>
			) : (
				<div className="grid grid-cols-4 gap-3">
					{books.map((book) => (
						<Card key={book.id} {...book} />
					))}
				</div>
			)}
			<button onClick={myStore.findMoreBooks}>Load more</button>
		</div>
	);
});
