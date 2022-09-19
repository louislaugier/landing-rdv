import Typed from 'react-typed'
import './index.css'
import { Heading } from '@chakra-ui/react'

export default function Home() {
	return (
		<div style={{ height: '100vh', backgroundColor: '#100D26', position: 'relative', top: -60, zIndex: -1, paddingTop: 60, display: 'flex', justifyContent: 'flex-start', color: 'white', fontSize: 48 }}>
			<div style={{width: '60vw', padding: 50, top: '25vh', position: 'relative'}}>
			<Heading as='h1' fontSize='6xl'>
				<Typed strings={['Votre nom de domaine gratuit pendant 5 ans à l\'achat d\'un site web', 'Votre site clé-en-main à 999€', 'Votre site web clé-en-main livré en 72h', 'Votre site web clé-en-main avec maintenance gratuite pendant 5 ans', 'Votre site web sur-mesure à prix abordable']} typeSpeed={25} backSpeed={10} loop />
			</Heading>
			</div>
			{/* <div style={{width: '50vw', padding: 75}}>
				<img src={startBuilding} alt=''></img>
			</div> */}
		</div>
	)
}
