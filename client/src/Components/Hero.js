import {
	Center,
	Stack,
	Image,
	Heading,
	Box,
	Flex,
	Grid,
	GridItem,
} from "@chakra-ui/react";
import introversion from "../Img/IntroversionFull.png";
import hero2 from "../Img/hero2.jpg";
import Upcoming from "./Upcoming";

function Hero() {
	return (
		<Center minH='100vh'>
			<Grid templateColumns='repeat(2, 1fr)'>
				<Center>
					<GridItem p='4' textAlign='end' colSpan={1}>
						<Heading color='white' size='3xl'>
							WELCOME{" "}
						</Heading>
						<Heading color='#B026FF' size='4xl'>
							TO
						</Heading>
						<Heading size='2xl'>MY ESPORTS</Heading>
						<Heading color='#B026FF' size='3xl'>
							PLACE
						</Heading>
						<Heading>#WIN</Heading>
					</GridItem>
				</Center>
				<GridItem>
					<Upcoming />
				</GridItem>
			</Grid>
		</Center>
	);
}
export default Hero;
