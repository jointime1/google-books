import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { title } from "process";

import { Book, Items } from "../types/items";
class Store {
	books: Book[] = [];
	key = "AIzaSyCAIhEAVC_vRxNJktKwBn_9dh9ukSVGXg4";
	value = "";
	amount = 0;
	loader = false;
	sortBy = "relevance";
	printType = "all";
	startIndex = 0;
	constructor() {
		makeAutoObservable(this);
	}
	findBooks = () => {
		this.loader = true;
		axios
			.get<Items>(
				`https://www.googleapis.com/books/v1/volumes?q=${this.value}&orderBy=${this.sortBy}&printType=${this.printType}&maxResults=20&startIndex=${this.startIndex}&key=${this.key}`
			)
			.then((result) => {
				this.amount = result.data.totalItems;
				this.books = [...this.books, ...result.data.items];
				this.books.map((book) => console.log(book.id));
			})
			.finally(() => {
				setTimeout(() => {
					this.loader = false;
				}, 1000);
			});
	};
	changeValue(text: string) {
		this.value = text;
	}
	changeType(text: string) {
		this.printType = text;
	}
	changeSort(text: string) {
		this.sortBy = text;
	}
	findMoreBooks = () => {
		this.startIndex = this.startIndex + 20;
		this.findBooks();
	};
}

export const myStore = new Store();
