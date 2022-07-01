import React from "react";

type Props = {
	path: string;
	category: string;
	title: string;
	author: string;
};

export const Card = ({ path, category, title, author }: Props) => {
	return (
		<div className="bg-slate-400 p-1 flex flex-col">
			<img src={path} alt="book img" />
			<div className= "text-slate-500">{category}</div>
			<div className="text-black">{title}</div>
			<div className="text-slate-500">{author}</div>
		</div>
	);
};
