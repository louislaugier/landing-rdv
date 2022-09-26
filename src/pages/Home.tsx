import Presentation from "../components/Home/Presentation";
import Pricing from "../components/Home/Pricing";
import Testimonials from "../components/Home/Testimonials";
import WelcomeSection from "../components/Home/WelcomeSection";

export default function Home() {
	return (
		<>
			<WelcomeSection />
			<Presentation />
			<Pricing />
			<Testimonials />
		</>
	)
}
