import Title from "@/components/Title";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
	return (
		<div className="">
			<Title level={2}>Nous contacter :</Title>
			<div className="text-center">
				<h3> Team Ramen O'Clock </h3>
				<p>Mail :ramenoclock@oclock.io</p>
				<a href="https://github.com/O-clock-Ramen">
					<FaGithub />
				</a>
			</div>
		</div>
	);
}
