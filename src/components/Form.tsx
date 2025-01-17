import { useState } from "react";

export default function Form({
	setSelectedCity,
}: { setSelectedCity: string | null }) {
	const [inputValue, setInputValue] = useState("");
	return (
		<form
			action="POST"
			className="flex p-4 gap-1"
			onSubmit={(event) => {
				event.preventDefault();
				const myFormData = new FormData(event.currentTarget);
				console.log(myFormData);

				const city = myFormData.get("city") as string;
				console.log(city);
				/* setSelectedCity(inputValue); */
				setInputValue("");
			}}
		>
			<label htmlFor="city" className="bg-cyan-50 text-black p-2">
				Ville
			</label>
			<input
				name="city"
				type="text"
				placeholder="ajouter une ville"
				className="bg-cyan-50 text-black p-2"
				value={inputValue}
				onChange={(eventChange) => {
					// on modifie le state pour ajouter la saisie utilisateur comme ça le rendu va se refaire et ça va s'afficher
					const userSaisie = eventChange.currentTarget.value;
					setInputValue(userSaisie);
				}}
			/>
			<button type="submit" className="bg-cyan-50 text-black p-2">
				Ajouter
			</button>
		</form>
	);
}
