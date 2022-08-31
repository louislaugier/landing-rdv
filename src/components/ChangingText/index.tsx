import Typed from 'react-typed'

export default function ChangingText() {
	return (
		<div style={{ height: '100vh', backgroundColor: '#100D26', position: 'relative', top: -60, zIndex: -1, paddingTop: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 72 }}>
			<Typed strings={["Votre site e-commerce clé-en-main pour 49€/mois", 'Votre site vitrine clé-en-main pour 9€/mois', 'Alexis suce']} typeSpeed={25} backSpeed={10} loop />
		</div>
	)
}
