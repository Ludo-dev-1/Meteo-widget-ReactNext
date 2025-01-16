"use client";

import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export default function Heart() {
	const [hearEmpty, setheartEmpty] = useState(false);

	return (
		<button
			type="button"
			onClick={() => {
				setheartEmpty(true);
			}}
		>
			{hearEmpty ? <FaHeart /> : <CiHeart />}
		</button>
	);
}
