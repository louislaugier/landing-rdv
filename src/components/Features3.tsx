import { Box, Container, Heading, SimpleGrid, Icon, Text, Stack, HStack, VStack } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

import { primary } from '../Palette'

// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
	return {
		id: i,
		title: 'Lorem ipsum dolor sit amet',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'
	}
})

export default function Features3() {
	return (
		<Box p={4} mb={10}>
			<Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
				{/* <Heading fontSize={'3xl'}>This is the headline</Heading> */}
				<Text color={'gray.600'} fontSize={'xl'}>
					Facteur Web est une agence web créée en 2022 qui vous accompagne dans la digitalisation de votre activité. Nous faisons une seule chose et nous la faisons bien : créer et maintenir votre site web.
				</Text>
			</Stack>

			<Container maxW={'6xl'} mt={10}>
				<SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
					{features.map((feature) => (
						<HStack key={feature.id} align={'top'}>
							<Box color={primary} px={2}>
								<Icon as={CheckIcon} />
							</Box>
							<VStack align={'start'}>
								<Text fontWeight={600}>{feature.title}</Text>
								<Text color={'gray.600'}>{feature.text}</Text>
							</VStack>
						</HStack>
					))}
				</SimpleGrid>
			</Container>
		</Box>
	)
}
