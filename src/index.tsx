import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import './style/App.css'
import { primary } from './style/Palette'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { PopupWidget } from 'react-calendly'

import Header from './components/Header'
import Home from './pages/Home'
import Starter from './pages/Starter'
import SurMesure from './pages/SurMesure'
import Legal from './pages/Legal'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Faq from './pages/Faq'
import NotFound from './pages/NotFound'
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

			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/starter" element={<Starter/>} />
				<Route path="/sur-mesure" element={<SurMesure/>} />
				<Route path="/mentions-legales" element={<Legal />} />
				<Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="*" element={<NotFound />} />
			</Routes>


			<PopupWidget {...calendlyProps} />
			<Footer />
		</ChakraProvider>
	)
}

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(container)

root.render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
)
