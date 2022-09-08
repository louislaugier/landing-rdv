import Typed from 'react-typed'
import './index.css'
import startBuilding from './../../illustrations/start_building.svg'

export default function Home() {
	return (
		<div style={{ height: '100vh', backgroundColor: '#100D26', position: 'relative', top: -60, zIndex: -1, paddingTop: 60, display: 'flex', justifyContent: 'flex-start', color: 'white', fontSize: 48 }}>
			<div style={{width: '50vw', padding: 50, top: '25vh', position: 'relative'}}>
				<Typed strings={['Votre site vitrine à partir de 750€, maintenance et nom de domaine gratuits pendant 5 ans*', 'Votre site de réservation à partir de 1000€', 'Votre site e-commerce clé-en-main à partir de 2500€ et 15€/mois']} typeSpeed={25} backSpeed={10} loop />
			</div>
			<div style={{width: '50vw', padding: 75}}>
				<img src={startBuilding} alt=''></img>
			</div>
		</div>
	)
}
