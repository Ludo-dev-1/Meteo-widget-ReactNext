"use client";

// ce composant est rendu coté server (c'est un server component), c'est a dire qu'il est executé sur le serveur pour fabriquer la page html et ensuite la page html non vide est envoyé au client : SSR
import Form from "@/components/Form";
import MeteoWidget from "@/components/MeteoWidget";

import { useState } from "react";

export default function Home() {
	const [selectedCity, setSelectedCity] = useState("");
	// attention ce console.log sera lisible dans le terminal coté serveur et non pas dans la console du navigateur comme pour un client component
	console.log("render du composant Home");

	return (
		// p-4 = padding de 1rem
		<>
			<div className="flex gap-4 justify-center flex-wrap">
				<MeteoWidget city="Paris" />
				<MeteoWidget city="Marseille" />
				<MeteoWidget city="Niort" />
				<MeteoWidget city="Saint-Hilaire-des-Loges" />
				<MeteoWidget city="Fontenay-le-Comte" />
				<Form setSelectedCity={setSelectedCity} />
				<MeteoWidget city={selectedCity} />
			</div>
		</>
	);
}
