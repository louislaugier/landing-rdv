import './App.css'
import { primary } from './Palette'

// import { useState } from 'react'

import { ChakraProvider, theme } from '@chakra-ui/react'
import { PopupWidget } from 'react-calendly'

import Header from './components/Header'
import WelcomeSection from './components/WelcomeSection'
import Presentation from './components/Presentation'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export const App = () => {
	const calendlyProps: any = {
		url: process.env.REACT_APP_CALENDLY_URL,
		rootElement: document.getElementById('root'),
		text: 'Prendre rendez-vous',
		textColor: 'white',
		color: primary
	}

	return (
		<ChakraProvider theme={theme}>
			<Header />

			<WelcomeSection />
			<Presentation />
			<Pricing />
			<Testimonials />

			<PopupWidget {...calendlyProps} />
			<Footer />
		</ChakraProvider>
	)
}
