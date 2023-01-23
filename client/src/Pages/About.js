import era from "../Img/era.png"

function About() {
  return (
        <>
        <section className="about-image grid flex content-center justify-center">
                <div className="container py-10">
                <h1 className="text-5xl font-semibold pb-5">Who is era?</h1>
                <p className="text-xl font-semibold pb-5">Era is an esports organization founded in 2018. Created to compete in the South African League of Legends esports scene, Era has
consistently had 2 teams in the top 8 nationally for the last 4 years. Historically housing 3 teams and having approx. 15 players at any
given time over 3 years. In the 2021 season Era rapidly grew to 6 teams and 40 players.</p>
                <p className="text-xl font-semibold pb-5">This growth was due to taking on 25 new players from the South African high school League of Legends league and other recruiting
resources. During 2021, Era had 78 unique players across 6 tournaments and grew to 7 teams. In 2022, Era has once again grown, now
housing 8 teams and maintaining 52 active players.</p>
                <p className="text-xl font-semibold pb-5">Era is currently the biggest organization in the South African League of Legends community and through a dedicated management team,
consistent community engagement (mini events and larger tournaments), all while listening to our players needs, Era provides a unique
experience in the South African esports scene, and our growth backs up the loyalty and dedication of our players.</p>       
                </div>
        </section>
        <section className="flex info-banner content-center justify-center text-center">
                <div className="p-5">
                <h1 className="text-4xl font-semibold pb-5">Era 2022 by the numbers (as at 31 Jan 2022):</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 justify-center items-center p-3 gap-5 text-center">
                <div className="transition duration-300 ease-in-out min-60 relative py-16 px-5 border border-b-slate-200 text-center hover:border hover:border-[#922729] rounded">
                        <div className="flex justify-center text-center text-[#70CDCE]">
                        <img src={era} height="100px" width="100px" /></div>
                        <p className="pt-2">Era active players: 52</p>
                        <p className="pt-2">Era active teams: 8</p>
                        <p className="pt-2">Era community discord members: 236</p>
                        <p className="pt-2">Large Era 2022 events planned: 3 (March/Mid year/End of Year and does not include other organization’s tournaments)</p>
                        <p className="pt-2">Active since 2018</p>
                        <p className="pt-2">Twitch.Tv Followers: 128</p>
                        <p className="pt-2">League of Legends - South African Community Facebook group members: 4.6 thousand</p>
                </div>
                <div className="transition duration-300 ease-in-out min-60 relative py-16 px-5 border border-b-slate-200 text-center hover:border hover:border-[#922729] rounded">
                        <div className="flex justify-center text-center text-[#70CDCE]">
                        <img src="./img/league-of-legends.png" height="100px" width="100px" /></div>
                        <h1 className="text-3xl font-semibold mt-2">League of Legends</h1>
                        <p className="pt-2">1st 2017: HP Omen Championship</p>
                        <p className="pt-2">1st 2019: VS Gaming</p>
                        <p className="pt-2">2nd Mettlestate season 3 2022</p>
                </div>
                </div>
                </div>
                </section>
                <section className="about-2 grid flex content-center justify-center">
                <div className="container py-10">
                <h1 className="text-5xl font-semibold pb-5">What makes era?</h1>
                                <p className="text-xl font-semibold pb-5">Era is committed to its players. With a firm belief that player engagement and enjoyment foster a positive community, while helping players grow in and outside of
esports. By using systems such as *Era Stats to give our players insight into their strengths and weakness, we allow players to not only hone their skills, but also feel like
a professional esports athlete as they compare themselves to the best in the world. Era Stats is a powerful tool that allows the organization to track player performance,
create statistic leaderboards, acknowledge players for extraordinary moments and hold onto each match played as a piece of Era’s history.</p>
                                <p className="text-xl font-semibold pb-5">Keeping to the theme of player engagement, Era hosts multiple small events every year. These small events range from fun mixers (allowing players to interact with
other members they do not usual encounter), to more competitive mini tournaments that could last a night or a weekend. These small events prove so popular that we
often get community members joining in who are not active Era players, or even play for rival organizations.</p>
                                <p className="text-xl font-semibold pb-5">Era’s managers have been in the esports scene for over 10 years, giving them a key insight into past organization’s triumphs and short-comings. Era consistently draws
on this knowledge to strive to be bigger and better every time we host an event. Along with manager’s careers ranging from finance, through IT development and
traditional sport coaching, there is a wider skillset to draw from whenever a need arises.</p>       
                                </div>
        </section>
        </>
  );
}

export default About;