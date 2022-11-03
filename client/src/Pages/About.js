import { Center, Container, Heading, Text, Box } from "@chakra-ui/react";

function About() {
  return (
    <>
      <Container maxW='8xl'>
        <Center minH="80vh">
          <Box>
        <Heading size="4xl" pt={5}>Who is era?</Heading>
        <Text>Era is an esports organization founded in 2018. Created to compete in the South African League of Legends esports scene, Era has
consistently had 2 teams in the top 8 nationally for the last 4 years. Historically housing 3 teams and having approx. 15 players at any
given time over 3 years. In the 2021 season Era rapidly grew to 6 teams and 40 players.</Text>
        <Text>This growth was due to taking on 25 new players from the South African high school League of Legends league and other recruiting
resources. During 2021, Era had 78 unique players across 6 tournaments and grew to 7 teams. In 2022, Era has once again grown, now
housing 8 teams and maintaining 52 active players.</Text>
        <Text>Era is currently the biggest organization in the South African League of Legends community and through a dedicated management team,
consistent community engagement (mini events and larger tournaments), all while listening to our players needs, Era provides a unique
experience in the South African esports scene, and our growth backs up the loyalty and dedication of our players.</Text>
        <Text>Era 2022 by the numbers (as at 31 Jan 2022):</Text>
        <Text>Era active players: 52</Text>
        <Text>Era active teams: 8</Text>
        <Text>Era community discord members: 236</Text>
        <Text>Large Era 2022 events planned: 3 (March/Mid year/End of Year and does not include other organization’s tournaments)</Text>
        <Text>Era active years: 4</Text>
        <a href="https://www.twitch.tv/era_esports_tv"><Text>Twitch.Tv Followers: 128</Text></a>
        <a href="https://www.facebook.com/groups/159748367414882"><Text pb={5}>League of Legends - South African Community Facebook group members: 4.6 thousand</Text></a>
        <hr />
        <Heading size="4xl" pt={5}>What makes era?</Heading>
        <Text>Era is committed to its players. With a firm belief that player engagement and enjoyment foster a positive community, while helping players grow in and outside of
esports. By using systems such as *Era Stats to give our players insight into their strengths and weakness, we allow players to not only hone their skills, but also feel like
a professional esports athlete as they compare themselves to the best in the world. Era Stats is a powerful tool that allows the organization to track player performance,
create statistic leaderboards, acknowledge players for extraordinary moments and hold onto each match played as a piece of Era’s history.</Text>
        <Text>Keeping to the theme of player engagement, Era hosts multiple small events every year. These small events range from fun mixers (allowing players to interact with
other members they do not usual encounter), to more competitive mini tournaments that could last a night or a weekend. These small events prove so popular that we
often get community members joining in who are not active Era players, or even play for rival organizations.</Text>
        <Text>Era’s managers have been in the esports scene for over 10 years, giving them a key insight into past organization’s triumphs and short-comings. Era consistently draws
on this knowledge to strive to be bigger and better every time we host an event. Along with manager’s careers ranging from finance, through IT development and
traditional sport coaching, there is a wider skillset to draw from whenever a need arises.</Text>
        </Box>
        </Center>
      </Container>
    </>
  );
}

export default About;