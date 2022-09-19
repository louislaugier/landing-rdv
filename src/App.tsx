import { ChakraProvider, theme } from '@chakra-ui/react'

import { InlineWidget, PopupWidget } from 'react-calendly'

import './App.css'

import Header from './components/Header'

import Home from './components/Home'

import Pricing from './components/Pricing'

import Features2 from './components/Features/index2'
import Features3 from './components/Features/index3'
import Features4 from './components/Features/index4'

import Testimonials from './components/Testimonials'
import Testimonials2 from './components/Testimonials/index2'

import Footer from './components/Footer'

export const App = () => {
	const calendlyProps: any = {
		url: process.env.REACT_APP_CALENDLY_URL,
		rootElement: document.getElementById('root'),
		text: 'Prendre rendez-vous',
		textColor: '#ffffff',
		color: '#00a2ff'
	}

	return (
		<ChakraProvider theme={theme}>
			<Header />

			<Home />

			<InlineWidget {...calendlyProps} />
			<PopupWidget {...calendlyProps} />

			<Pricing />

			{/* <Features2/> */}
			<Features3 />
			<Features4 />

			<Testimonials />
			<Testimonials2 />

			<Footer />
		</ChakraProvider>
	)
}
