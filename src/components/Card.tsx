import { observer } from "mobx-react-lite";
import React from "react";
import { Book } from "../types/items";

export const Card = observer((book: Book) => {
	// console.log(typeof book.volumeInfo.imageLinks.thumbnail)
	return (
		<div className="bg-slate-400 p-1 flex flex-col">
			{book.volumeInfo.imageLinks ? (
				<img src={book.volumeInfo.imageLinks.thumbnail} alt="Изображение" />
			) : (
				false
			)}

			<div className="text-slate-500">{book.volumeInfo.categories}</div>
			<div className="text-black">{book.volumeInfo.title}</div>
			<div className="text-slate-500">
				{book.volumeInfo.authors
					? book.volumeInfo.authors[0]
					: book.volumeInfo.authors}
			</div>
		</div>
	);
});
