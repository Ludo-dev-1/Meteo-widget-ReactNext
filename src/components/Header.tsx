"use client";
import Title from "./Title";
import Link from "next/link";

export default function Header() {
	return (
		<header>
			<nav className="bg-amber-300 text-gray-950 p-4 mb-4 rounded-tl-lg rounded-br-lg">
				<ul className="flex gap-4">
					<li>
						<Link href="/"> Acceuil</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<Title level={1}>Meteo Widgets</Title>
			<form
				action="POST"
				className="flex p-4 gap-1"
				onSubmit={(event) => {
					event.preventDefault();
					const myFormData = new FormData(event.currentTarget);
					console.log(myFormData);

					const city = myFormData.get("city") as string;
					console.log(city);
				}}
			>
				<label htmlFor="city">Ville</label>
				<input type="text" placeholder="ajouter une ville" />
			</form>
		</header>
	);
}
