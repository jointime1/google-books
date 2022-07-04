import { observer } from "mobx-react-lite";
import { BeatLoader } from "react-spinners";
import { myStore } from "../store/Store";
import { Card } from "./Card";

export const Main = observer(() => {
	const books = myStore.books;
	const idBooks = new Set(books.map((book) => book.id));
	// sometimes google gives me 2 or same books, so i need to filter
	books.filter((book) => {
		if (idBooks.has(book.id)) {
			idBooks.delete(book.id);
			return true;
		} else {
			return false;
		}
	});
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
