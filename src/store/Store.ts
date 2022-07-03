import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

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
	isChosen = false;
	idBook = "";
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
				runInAction(() => {
					this.amount = result.data.totalItems;
					this.books = result.data.items;
				});
			})
			.finally(() => {
				setTimeout(() => {
					runInAction(() => {
						this.loader = false;
					});
				}, 1000);
			});
	};
	changeValue(text: string) {
		this.value = text;
	}
	changeType(text: string) {
		this.printType = text;
		this.books = [];
		this.findBooks();
	}
	changeSort(text: string) {
		this.sortBy = text;
		this.books = [];
		this.findBooks();
	}
	setIsChosen() {
		this.isChosen = true;
	}
	setId(id: string) {
		this.idBook = id;
	}
	findMoreBooks = () => {
		this.startIndex = this.startIndex + 20;
		runInAction(() => {
			this.loader = true;
			axios
				.get<Items>(
					`https://www.googleapis.com/books/v1/volumes?q=${this.value}&orderBy=${this.sortBy}&printType=${this.printType}&maxResults=20&startIndex=${this.startIndex}&key=${this.key}`
				)
				.then((result) => {
					runInAction(() => {
						this.amount = result.data.totalItems;
						this.books = this.books.concat(result.data.items);
					});
				})
				.finally(() => {
					setTimeout(() => {
						runInAction(() => {
							this.loader = false;
						});
					}, 1000);
				});
		});
	};
}

export const myStore = new Store();
