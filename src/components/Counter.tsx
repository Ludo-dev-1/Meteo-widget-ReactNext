"use client";

import { useState } from "react";

export default function Counter() {
	const [nbClick, setNbClicks] = useState(0);

	return (
		<button
			type="button"
			onClick={() => {
				setNbClicks(nbClick + 1);
			}}
		>
			❤️ {nbClick}
		</button>
	);
}
