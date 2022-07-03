import React from "react";
import { ImageLinks } from "../types/items";
import close from "../assets/close.svg";
import { myStore } from "../store/Store";
type Props = {
	categories?: string[];
	title?: string;
	link?: ImageLinks;
	authors?: string[];
	subtitle?: string;
};

export const ChosenCard = ({
	categories,
	title,
	authors,
	link,
	subtitle,
}: Props) => {
	return (
		<div className="flex py-10">
			<div className="p-4 w-1/3 flex justify-center items-center bg-slate-400">
				{link && <img src={link.thumbnail} alt="book" className="scale-100" />}
			</div>
			<div className="flex flex-col w-2/3 px-3">
				<div className="mb-4">{categories}</div>
				<div className="text-black font-bold text-xl mb-2">{title}</div>
				<div className="text-slate-500">{authors}</div>
				{subtitle && (
					<div className="w-2/3 border rounded-md p-4">{subtitle}</div>
				)}
				<button className="w-fit" onClick={() => myStore.setId("")}>
					<img src={close} alt="close" className="h-7 w-7" />
				</button>
			</div>
		</div>
	);
};
