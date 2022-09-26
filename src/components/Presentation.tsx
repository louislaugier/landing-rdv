import { Box, VStack, Button, Flex, Divider, chakra, Grid, GridItem, Container, Text } from '@chakra-ui/react'

import { primary, secondary } from '../Palette'

interface FeatureProps {
	heading: string
	text: string
}

const Feature = ({ heading, text }: FeatureProps) => {
	return (
		<GridItem>
			<chakra.h3 fontSize='xl' fontWeight='600'>
				{heading}
			</chakra.h3>
			<chakra.p>{text}</chakra.p>
		</GridItem>
	)
}

export default function Features4() {
	return (
		<>
			<Box as={Container} maxW='7xl' p={4}>
				<Text textAlign={'center'} color={'gray.600'} fontSize={'xl'}>
					Facteur Web est une agence web créée en 2022 qui vous accompagne dans la digitalisation de votre activité.
				</Text>
				<Text textAlign={'center'} color={'gray.600'} mb={16} fontSize={'xl'}>
					Nous mettons notre expertise au service de la création de vos sites web.
				</Text>
				<Grid
					templateColumns={{
						base: 'repeat(1, 1fr)',
						sm: 'repeat(2, 1fr)',
						md: 'repeat(4, 1fr)'
					}}
					gap={{ base: '8', sm: '12', md: '16' }}
				>
					<Feature heading={'Une offre au plus près de vos besoins'} text={"Nous sommes à l'écoute de tout projet que vous avez à nous proposer. Nous pouvons adapter nos processus de travail selon vos problématiques métier."} />
					<Feature heading={'Une offre plus abordable'} text={"Notre offre Starter vous garantit un site web déployé sous 72h pour 1000€ TTC. L'offre comprend 5 ans de maintenance gratuite."} />

					<Feature heading={'Flexibilité'} text={'Quel que soit la nature de votre projet, nous vous proposerons des solutions adaptées à votre budget.'} />
					<Feature heading={'Un devis transparent'} text={"Des personnes à l'écoute pour que votre devis blabla..."} />
				</Grid>
			</Box>

			<Divider mt={12} mb={12} />
			<Box as={Container} maxW='7xl' p={4}>
				<Grid
					templateColumns={{
						base: 'repeat(1, 1fr)',
						sm: 'repeat(2, 1fr)',
						md: 'repeat(2, 1fr)'
					}}
					gap={4}
					mb={12}
				>
					<GridItem colSpan={1}>
						<VStack alignItems='flex-start' spacing='20px'>
							<chakra.h2 fontSize='3xl' fontWeight='700'>
								Parlez-nous de votre projet
							</chakra.h2>
							<Button
								color='white'
								bg={primary}
								_hover={{
									bg: secondary
								}}
								size='md'
							>
								Prendre rendez-vous
							</Button>
						</VStack>
					</GridItem>
					<GridItem>
						<Flex>
							<chakra.p>Profitez d'un appel gratuit de 30 minutes pour nous parler de votre projet et commencer à estimer blablabla...</chakra.p>
						</Flex>
					</GridItem>
				</Grid>
			</Box>

			<Divider mb={12} />
		</>
	)
}
