import {
	Box,
	Button,
	Divider,
	Heading,
	List,
	ListIcon,
	ListItem,
	Stack,
	Text,
	// useColorModeValue,
  } from '@chakra-ui/react';
  
  import { FaCheckCircle } from 'react-icons/fa';
  
  const options1 = [
	{ id: 1, desc: 'Convient pour un site vitrine' },
	{ id: 2, desc: 'Livraison sous 72h ouvrées' },
	{ id: 3, desc: '5 ans de maintenance et hébergement offerts' },
	{ id: 3, desc: 'Satisfait ou remboursé' },
  ];
  const options2 = [
	{ id: 1, desc: '1 lorem ipsum' },
	{ id: 2, desc: 'Lorem, ipsum dolor.' },
	{ id: 3, desc: 'Monthly Updates' },
  ];

  interface PackageTierProps {
	title: string;
	options: Array<{ id: number; desc: string }>;
	typePlan: string;
  }
  const PackageTier = ({
	title,
	options,
	typePlan,
  }: PackageTierProps) => {

	return (
	  <Stack
		p={3}
		py={3}
		justifyContent={{
		  base: 'flex-start',
		  md: 'space-around',
		}}
		direction={{
		  base: 'column',
		  md: 'row',
		}}
		alignItems={{ md: 'center' }}>
		<Heading size={'md'}>{title}</Heading>
		<List spacing={3} textAlign="start">
		  {options.map((desc, id) => (
			<ListItem key={desc.id}>
			  <ListIcon as={FaCheckCircle} color="#6C63FF" />
			  {desc.desc}
			</ListItem>
		  ))}
		</List>
		<Heading size={'xl'}>{typePlan}</Heading>
		<Stack>
		  <Button
			size="md"
			bg={'#6C63FF'}
			color={'white'}
			_hover={{
				bg: '#100D26'
			}}
		>
			{typePlan ===  'Sur devis' ? 'Prendre rendez-vous' : 'Vérifier l\'égibilité'}
		  </Button>
		  <Button
			size="md"
			bg={'#100D26'}
			color={'white'}
			_hover={{
				bg: '#100D26'
			}}
		>
			En savoir plus
		  </Button>
		</Stack>
	  </Stack>
	);
  };
  const Pricing2 = () => {
	return (
	  <Box py={6} px={5}>
		<Stack spacing={4} width={'100%'} direction={'column'}>
		  <Stack
			p={5}
			alignItems={'center'}
			justifyContent={{
			  base: 'flex-start',
			  md: 'space-around',
			}}
			direction={{
			  base: 'column',
			  md: 'row',
			}}>
			<Stack
			  width={{
				base: '100%',
				md: '40%',
			  }}
			  textAlign={'center'}>
			  <Heading size={'lg'}>
				Une offre adaptée à <Text color="#6C63FF">vos besoins</Text>
			  </Heading>
			</Stack>
			<Stack
			  width={{
				base: '100%',
				md: '60%',
			  }}>
			  <Text textAlign={'center'}>
				Pour l'achat d'un site web, nous vous offrons <Text fontWeight={800} color="#6C63FF">5 ans de nom de domaine gratuit</Text>
			  </Text>
			</Stack>
		  </Stack>
		  <Divider />
		  <PackageTier title={'Starter'} typePlan="999€ TTC" options={options1} />
		  <Divider />
		  <PackageTier title={'Sur-mesure'} typePlan="Sur devis" options={options2}/>
		</Stack>
	  </Box>
	);
  };
  
  export default Pricing2;