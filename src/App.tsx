import { ChakraProvider, theme } from '@chakra-ui/react'

import { InlineWidget } from "react-calendly"

import Header from './components/Header'

import ChangingText from './components/ChangingText'


import Home from './components/Home'

import Pricing from './components/Pricing'

import Features from './components/Features'
import Features2 from './components/Features/index2'
import Features3 from './components/Features/index3'
import Features4 from './components/Features/index4'

import Testimonials from './components/Testimonials'
import Testimonials2 from './components/Testimonials/index2'

import Footer from './components/Footer'

export const App = () => {
	const calendlyProps: any = {
		url: "https://calendly.com/l-laugier/30min",
		rootElement: document.getElementById("root"),
		text: "Click here to schedule!",
		textColor: "#ffffff",
		color: "#00a2ff"
	}

	return (
		<ChakraProvider theme={theme}>
			<Header/>

			<ChangingText/>

			<Home/>

			<InlineWidget
				{...calendlyProps}
			/>

			<Pricing/>

			<Features/>

			<Features2/>
			<Features3/>
			<Features4/>

			<Testimonials/>
			<Testimonials2/>

			<Footer/>
		</ChakraProvider>
	)
}
