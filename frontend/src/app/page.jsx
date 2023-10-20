"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
	const [messages, setMessage] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:8080/messages")
			.then((res) => setMessage(res.data))
			.catch((error) => {
				setError(error.message);
				console.log("Error message:", error.message);
			});
	}, []);

	return (
		<div className="relative">
			<header>
				<div className="h-[7em] w-full bg-black bg-opacity-10 p-4 z-1 absolute flex justify-center items-center max-sm:bg-opacity-60 max-sm:h-[6.5%]">
					<div className="mx-auto flex justify-center items-center">
						<img
							src="/hamburger.png"
							alt="hamburger menu"
							className="cursor-pointer"
						/>
						<p className="text-white text-[1.2rem] font-medium cursor-pointer tracking-wider max-sm:font-extrabold">
							Explore Products
						</p>
					</div>
					<div>
						<img
							src="/chase.png"
							alt="chase logo"
							className="h-[60px] cursor-pointer  max-sm:hidden"
						/>
					</div>
					<div className="flex justify-center items-center mx-auto">
						<p className="text-white text-[1.2rem] mx-4 font-medium cursor-pointer tracking-wider max-sm:font-extrabold">
							ATM Branch
						</p>
						<p className="text-white text-[1.2rem] mx-4 font-medium cursor-pointer tracking-wider max-sm:font-extrabold">
							Espa&ntilde;ol
						</p>
						<button className="py-[1em] px-[1.5em] bg-[#0060f0] border-2 text-white font-bold rounded-md mx-2 hover:bg-[#214a82] transition-colors duration-300  max-sm:py-[0.25em] max-sm:font-extrabold">
							Sign In
						</button>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<img
						src="/hero.png"
						alt="a picture of a banker with clients"
						className="w-full x-[-1]"
					/>
				</div>
			</header>

			<main>
				<div className="mt-4 flex flex-col justify-center items-center">
					<h1 className="my-4 text-[3.75rem] text-[#8e8e8f] font-thin tracking-wider max-md:text-center">
						Complaints & Feedback
					</h1>
					<p className="w-[650px] text-[1.15rem] text-center text-[#414042] max-xl:mb-4 max-xl:w-[70%]">
						Your satisfaction matters. If our service falls short of your
						expectations, let us know right away so we can address your
						concerns. Please tell us if you've had difficulty getting your issue
						resolved.
					</p>
				</div>

				<div className="bg-[#f7f7f7] flex items-center justify-center gap-[2em] mt-12 max-2xl:flex-wrap max-xl:mx-4 max-xl:mt-0 max-xl:gap-0">
					{error === null ? (
						messages.map((message, index) => (
							<div
								key={index}
								className="w-[550px] h-[350px] py-8 max-xl:h-[250px]"
							>
								<p className="text-[1.35rem] font-semibold">{message.title}</p>
								<p className="max-h-[100px] mt-1 text-[1.25rem] text-[#414042]">
									{message.desc}
								</p>
							</div>
						))
					) : (
						<p>Oops, an error has occurred!</p>
					)}
				</div>
			</main>

			<footer className="mt-[4em] flex flex-col items-center justify-center">
				<div className="mb-7 text-[#717171] text-[0.95rem]">WEB01158</div>
				<div className="my-[1em] border-t border-[grey] w-[60%] h-0"></div>
				<div className="flex justify-center items-center">
					<p className="text-[1.25rem] text-[#717171]">Follow us:</p>
					<img
						src="/socials.png"
						alt="socials"
						className="h-[40px] ml-4 cursor-pointer"
					/>
				</div>
			</footer>
		</div>
	);
};

export default Homepage;
