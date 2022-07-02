import React from "react";
import { myStore } from "../store/Store";
type Props = {
	name: string;
};

export const Select = ({ name }: Props) => {
	return (
		<div className="flex">
			<label htmlFor="select">{name}</label>
			<select
				id="select"
				className="form-select appearance-none
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
				aria-label="Default select example"
			>
				{name === "Categories" ? (
					<>
						<option selected>all</option>
						<option value="1">art</option>
						<option value="2">biography</option>
						<option value="3">computers</option>
						<option value="4">history</option>
						<option value="5">medical</option>
						<option value="6">poetry</option>
					</>
				) : (
					<>
						<option selected>relevance</option>
						<option value="1">newest</option>
					</>
				)}
			</select>
		</div>
	);
};
