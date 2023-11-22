import './App.css';
import GameCard from "./GameCard";
import Carousel from "./Caroussel";
import JobCard from "./JobCard";
import MainPage from "./MainPage";
import {Parallax, ParallaxBanner, ParallaxProvider} from "react-scroll-parallax";
import Navbar from "./navbar";
import logo from './images/icon.png';
import neptune from './images/neptune.png';
import wtf from './images/screens/main_menu.jpg';
import gameScreen from './images/screens/1699564370333.jpg';

const game = {
    id: 1,
    name: 'Simple Memory',
    shortdesc: "Simple Memory is a card memory game.",
    description: 'The goal is to find all pairs of cards in as few moves as possible. You can choose between 3 different difficulties'
}

const game_soon = {
    id: 0,
    name: 'Coming Soon',
    description: 'Hey, we are working on something new. Stay tuned! (plus you are not supposed to see this revert the blur filter! (or escape f12))'
}

function App() {
    return (<ParallaxProvider>
        <div className="App">
            <div>
                <Navbar/>
            </div>
            <div>
                <MainPage/>
            </div>
            <div id="next"/>
            <div className="flex items-center justify-center flex-col mt-32">
                <div className="">
                    <h2 className="text-4xl font-bold m-auto bg-gradient-to-br from-pink-500 via-purple-600 to-red-900 text-transparent bg-clip-text filter drop-shadow-2xl
            ">Quasar Entertainment</h2>
                    <p className="text-xl mt-2 tracking-wide">
                        Founded in 2023 Quasar Entertainment is a small studio based in the heart of Québec. We are a small
                        team of
                        passionate people who love to create android apps.
                    </p>
                </div>
                <div className={"divider mx-24 my-8"}></div>
                <div>
                    <h2 className="text-4xl font-bold m-auto bg-gradient-to-br from-pink-500 via-purple-600 to-red-900 text-transparent bg-clip-text filter drop-shadow-2xl
            ">Our Games</h2>
                </div>
                <div className="grid grid-cols-3 m-auto mt-8">
                    <GameCard game={game} appLogo={logo}
                              gameScreen={gameScreen} additionalClasses={undefined}/>
                    <GameCard game={game_soon} appLogo={neptune}
                              gameScreen={wtf} additionalClasses={"blur"}/>
                    <GameCard game={game_soon} appLogo={neptune}
                              gameScreen={wtf} additionalClasses={"blur"}/>
                </div>
                <div className={"divider mx-24 my-8"}></div>
                <h2 className="text-4xl font-bold m-auto bg-gradient-to-br from-pink-500 via-purple-600 to-red-900 text-transparent bg-clip-text filter drop-shadow-2xl
            ">Our Team</h2>
                <div className="grid grid-cols-3 m-auto mt-8">
                    <JobCard name="Doriane André" jobTitle="Designer   "
                             description="Doriane is the main graphic designer of Quasar Entertainment. She was there since the very beginning of the company, and were the first to design the app on figma. She recently graduated from UQAC and flew back to France."
                             imageUrl="https://media.discordapp.net/attachments/1015345909351075861/1175906572338216981/Doriane_AN_65711559.jpg"/>
                    <JobCard name="Ethan Perrod" jobTitle="CEO / Game Developer"
                             description="Ceo of Quasar Entertainment, Ethan is a passionate game developer. He is currently studying at the University of Quebec in Chicoutimi in computer science, Making android apps developpement in Unreal Engine is his passion."
                             imageUrl="https://media.licdn.com/dms/image/C5603AQG0tCNvXXXx8g/profile-displayphoto-shrink_200_200/0/1606229958025?e=1706140800&v=beta&t=ZiP7TVshSJD0Rqdazq5UK8N5RYovRtpTmr2wj0CAQ_0"/>
                    <JobCard name="Mathieu Ponal" jobTitle="Web Developer"
                             description="Lead web developer, Mathieu is also in the gaming industry. Could talk about rust for hours, he is a passionate gamer and an okay web developer. He joined the team recently to start bluiding the website and backend of Quasar Entertainment."
                             imageUrl="https://media.licdn.com/dms/image/D4E03AQEhj0HHXA8-Ag/profile-displayphoto-shrink_200_200/0/1690213955206?e=1706140800&v=beta&t=xi8N3BgGNbC1OG8sfiF31H63XHp7qc_Y1ZeAGPiP-_A"/>
                </div>
            </div>
            <footer className="flex items-center justify-center w-full h-24 mt-16 border-t border-accent">
                <p className="text-xl font-bold">Quasar Entertainment</p>
            </footer>


        </div>
    </ParallaxProvider>);
}

export default App;
