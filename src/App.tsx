import { ChakraProvider, theme } from '@chakra-ui/react'

import { InlineWidget } from "react-calendly"

import Header from './components/Header'

import Features from './components/Features'
import Features2 from './components/Features/index2'
import Features3 from './components/Features/index3'
import Features4 from './components/Features/index4'

import Footer from './components/Footer'

import Home from './components/Home'

import Testimonials from './components/Testimonials'
import Testimonials2 from './components/Testimonials/index2'
import Testimonials3 from './components/Testimonials/index3'

import Pricing from './components/Pricing'

export const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Header/>

			<Home/>

			<InlineWidget url="https://calendly.com/l-laugier/30min" />

			<Pricing/>

			<Features/>
			<Features2/>
			<Features3/>
			<Features4/>

			<Testimonials/>
			<Testimonials2/>
			<Testimonials3/>


			<Footer/>
		</ChakraProvider>
	)
}
