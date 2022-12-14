import Typed from 'react-typed'
import { Heading } from '@chakra-ui/react'
import mailDelivery from './../../assets/illustrations/mail_delivery.svg'
import { secondary } from '../../style/Palette'

export default function WelcomeSection() {
	return (
		<div style={{ height: '100vh', maxHeight: '100vh', backgroundColor: secondary, position: 'relative', top: -60, zIndex: -1, paddingTop: 60, display: 'flex', justifyContent: 'flex-start', color: 'white', fontSize: 48 }}>
			<div style={{width: '70vw', padding: 50, top: '25vh', position: 'relative'}}>
			<Heading as='h1' fontSize='6xl'>
				<Typed strings={['Votre site web avec 5 ans de nom de domaine gratuit', 'Vote site web à haut niveau de référencement naturel', 'Votre site web clé-en-main à 999€', 'Votre site web clé-en-main livré en 72h', 'Votre site web clé-en-main avec maintenance gratuite pendant 5 ans', 'Votre site web sur-mesure avec maintenance abordable']} typeSpeed={25} backSpeed={10} loop />
			</Heading>
			</div>
			<div style={{width: '50vw', padding: '0 100px', display: 'flex', }}>
				<img style={{width: 400}} className='svg-illu' src={mailDelivery} alt=''/>
			</div>
		</div>
	)
}