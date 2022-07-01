import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};

const key = "AIzaSyCAIhEAVC_vRxNJktKwBn_9dh9ukSVGXg4";

export const Header = (props: Props) => {
	const [value, setValue] = useState("russia");
	const [books, setBooks] = useState();
	useEffect(() => {
		findBooks();
		console.log(books);
	}, []);

	function findBooks() {
		axios
			.get(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
			.then((result) => setBooks(result.data));
	}
	return (
		<header>
			<h1 className="text-center text-xl font-bold">Search for books</h1>
			<div>
				<input
					className="border-2"
					type="text"
					onChange={(e) => {
						e.preventDefault();
						setValue(e.target.value);
					}}
				/>
				<button className="font-bold" onClick={findBooks}>
					Найти книги
				</button>
			</div>
			<div>{books}</div>
		</header>
	);
};
