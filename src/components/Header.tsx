import Title from "./Title";
import Link from "next/link";

export default function Header() {
	return (
		<header>
			<nav className="bg-slate-300 text-gray-950 p-4 mb-4">
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
		</header>
	);
}
