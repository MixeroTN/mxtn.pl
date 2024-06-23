import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
	return (
		<main>
			<WavyBackground className="max-w-4xl mx-auto pb-40">
				<p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
					Under Construction
				</p>
				<p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
					<a href="https://github.com/MixeroTN">
						Click here to visit my GitHub profile
					</a>
				</p>
			</WavyBackground>
		</main>
	);
}
