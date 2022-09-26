import {
	Box,
	Button,
	Divider,
	Heading,
	List,
	ListIcon,
	ListItem,
	Stack,
	Text
	// useColorModeValue,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import { primary, secondary } from '../../style/Palette'

const options1 = [
	{ id: 1, desc: 'Sous conditions*' },
	{ id: 2, desc: 'Convient pour un site vitrine' },
	{ id: 3, desc: 'Livraison sous 72h ouvrées' },
	{ id: 4, desc: '5 ans de maintenance et hébergement offerts' },
	{ id: 5, desc: 'Satisfait ou remboursé' }
]
const options2 = [
	{ id: 1, desc: 'Que vous ayez déjà un hébergeur, votre nom de domaine, votre design en tête, nous saurons valoriser vos acquis pour les mettre au service de votre site internet.' },
	{ id: 2, desc: 'API personnalisée' },
	{ id: 3, desc: 'UI Kit personnalisé' },
	{ id: 3, desc: 'UI Kit personnalisé' },
	{ id: 3, desc: 'Tableau de bord personnalisé' },
]

interface PackageTierProps {
	title: string
	options: Array<{ id: number; desc: string }>
	typePlan: string
}
const PackageTier = ({ title, options, typePlan }: PackageTierProps) => {
	return (
		<Stack
			p={3}
			py={3}
			justifyContent={{
				base: 'flex-start',
				md: 'space-around'
			}}
			direction={{
				base: 'column',
				md: 'row'
			}}
			alignItems={{ md: 'center' }}
		>
			<Heading size={'md'}>{title}</Heading>
			<List spacing={3} textAlign='start'>
				{options.map((desc, id) => (
					<ListItem key={desc.id}>
						<ListIcon as={FaCheckCircle} color={primary} />
						{desc.desc}
					</ListItem>
				))}
			</List>
			<Heading size={'xl'}>{typePlan}</Heading>
			<Stack>
				<Button
					size='md'
					bg={primary}
					color={'white'}
					_hover={{
						bg: secondary
					}}
				>
					{typePlan === 'Sur devis' ? 'Prendre rendez-vous' : "Démo"}
				</Button>
				<Button
					size='md'
					bg={secondary}
					color={'white'}
					_hover={{
						bg: secondary
					}}
				>
					En savoir plus
				</Button>
			</Stack>
		</Stack>
	)
}
const Pricing = () => {
	return (
		<Box pb={8} px={5}>
			<Stack spacing={4} width={'100%'} direction={'column'}>
				<Stack
					mb={8}
					alignItems={'center'}
					justifyContent={{
						base: 'flex-start',
						md: 'space-around'
					}}
					direction={{
						base: 'column',
						md: 'row'
					}}
				>
					<Stack
						width={{
							base: '100%',
							md: '40%'
						}}
						textAlign={'center'}
					>
						<Heading size={'lg'}>
							Une offre adaptée à <Text color={primary}>vos besoins</Text>
						</Heading>
					</Stack>
					<Stack
						width={{
							base: '100%',
							md: '60%'
						}}
					>
						<Text textAlign={'center'}>
							Pour l'achat d'un site web, nous vous offrons{' '}
							<Text fontWeight={800} color={primary}>
								5 ans de nom de domaine gratuit
							</Text>
						</Text>
					</Stack>
				</Stack>
				<PackageTier title={'Express'} typePlan='999€ TTC' options={options1} />
				<Divider />
				<PackageTier title={'Sur-mesure'} typePlan='Sur devis' options={options2} />
			</Stack>
		</Box>
	)
}

export default Pricing