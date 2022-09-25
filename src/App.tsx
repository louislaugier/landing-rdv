// import { useState } from 'react'

import { ChakraProvider, theme } from '@chakra-ui/react'

import { InlineWidget, PopupWidget } from 'react-calendly'

import './App.css'

import Header from './components/Header'

import Home from './components/WelcomeSection'

// import Pricing from './components/Pricing'
import Pricing2 from './components/Pricing2'

// import Features2 from './components/Features2'
import Features3 from './components/Features3'
import Features4 from './components/Features4'

// import Testimonials from './components/Testimonials'
import Testimonials2 from './components/Testimonials2'

import Footer from './components/Footer'


export const App = () => {
	const calendlyProps: any = {
		url: process.env.REACT_APP_CALENDLY_URL,
		rootElement: document.getElementById('root'),
		text: 'Prendre rendez-vous',
		textColor: 'white',
		color: '#6C63FF'
	}

	return (
		<ChakraProvider theme={theme}>
			<Header />

			<Home />

			<Features3 />

			{/* <Pricing /> */}
			<Pricing2 />

			{/* <Features2/> */}
			<Features4 />

			<InlineWidget {...calendlyProps} />
			<PopupWidget {...calendlyProps} />

			{/* <Testimonials /> */}
			<Testimonials2 />

			<Footer />
		</ChakraProvider>
	)
}
