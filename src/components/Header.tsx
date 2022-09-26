import { Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Link, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useBreakpointValue, useDisclosure, Tooltip } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon, MoonIcon } from '@chakra-ui/icons'
import { primary, secondary } from '../style/Palette'

export default function Header() {
	const { isOpen, onToggle } = useDisclosure()

	return (
		<Box>
			<Flex bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('gray.600', 'white')} minH={'60px'} py={{ base: 2 }} px={{ base: 4 }} borderBottom={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.900')} align={'center'}>
				<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
					<IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={'ghost'} aria-label={'Toggle Navigation'} />
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<Text textAlign={useBreakpointValue({ base: 'center', md: 'left' })} fontFamily={'heading'} color={useColorModeValue('gray.800', 'white')}>
						Logo facteurweb.fr
					</Text>

					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>

				<Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
					{/* <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
						Sign In
					</Button> */}
					<Button
						display={{ base: 'none', md: 'inline-flex' }}
						fontSize={'sm'}
						fontWeight={600}
						color={'white'}
						bg={primary}
						_hover={{
							bg: secondary
						}}
					>
						Prendre rendez-vous
					</Button>
					<Button
						bg={secondary}
						_hover={{
							bg: secondary
						}}
						color='white'
					>
						<MoonIcon />
					</Button>
				</Stack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	)
}

const DesktopNav = () => {
	const linkColor = useColorModeValue('gray.600', 'gray.200')
	const linkHoverColor = useColorModeValue('gray.800', 'white')
	const popoverContentBgColor = useColorModeValue('white', 'gray.800')

	return (
		<Stack direction={'row'} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={'hover'} placement={'bottom-start'}>
						<PopoverTrigger>
							<Link
								p={2}
								href={navItem.href ?? '#'}
								fontSize={'sm'}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: 'none',
									color: linkHoverColor
								}}
							>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'} minW={'sm'}>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	)
}

const DesktopSubNav = ({ label, href, subLabel }: any) => {
	const link: any = (
		<Link style={{opacity: label === 'Emplois' ? 0.5 : 1}} href={href} role={'group'} display={'block'} p={2} rounded={'md'} _hover={{ bg: useColorModeValue('purple.50', 'gray.900') }}>
			<Stack direction={'row'} align={'center'}>
				<Box>
					<Text transition={'all .3s ease'} _groupHover={{ color: primary }} fontWeight={500}>
						{label}
					</Text>
					<Text fontSize={'sm'}>{subLabel}</Text>
				</Box>
				<Flex transition={'all .3s ease'} transform={'translateX(-10px)'} opacity={0} _groupHover={{ opacity: '100%', transform: 'translateX(0)' }} justify={'flex-end'} align={'center'} flex={1}>
					<Icon color={primary} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>

	)
	return label === 'Emplois' ? <Tooltip label='À venir'>{link}</Tooltip> : <>{link}</>
}

const MobileNav = () => {
	return (
		<Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	)
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
	const { isOpen, onToggle } = useDisclosure()

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href ?? '#'}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none'
				}}
			>
				<Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
					{label}
				</Text>
				{children && <Icon as={ChevronDownIcon} transition={'all .25s ease-in-out'} transform={isOpen ? 'rotate(180deg)' : ''} w={6} h={6} />}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
				<Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')} align={'start'}>
					{children &&
						children.map((child) => (
							<Link key={child.label} py={2} href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	)
}

interface NavItem {
	label: string
	subLabel?: string
	children?: Array<NavItem>
	href?: string
}

const NAV_ITEMS: Array<NavItem> = [
	{
		label: 'Produits',
		children: [
			{
				label: 'Offre Starter',
				subLabel: 'Abordable et livré rapidement',
				href: 'starter'
			},
			{
				label: 'Offre Sur-Mesure',
				subLabel: 'Un site web réellement à la carte',
				href: 'sur-mesure'
			}
		]
	},
	{
		label: 'Ressources',
		children: [
			// {
			// 	label: 'À propos',
			// 	subLabel: 'Qui sommes-nous ?',
			// 	href: '#'
			// },
			{
				label: 'Mentions légales',
				subLabel: 'facteurweb.fr',
				href: 'mentions-legales'
			},
			{
				label: 'FAQ',
				subLabel: 'Frequently asked questions',
				href: 'faq'
			},
			{
				label: 'Emplois',
				subLabel: "Intégrer l'équipe de facteurweb.fr",
				href: '#'
			}
		]
	},
	{
		label: 'Support',
		href: '#'
	}
]
