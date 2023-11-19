import './App.css';
import GameCard from "./GameCard";
import Carousel from "./Caroussel";
import JobCard from "./JobCard";
import MainPage from "./MainPage";
import {Parallax, ParallaxBanner, ParallaxProvider} from "react-scroll-parallax";
import Navbar from "./navbar";
import logo from './images/icon.png';
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
    description: 'Hey, we are working on something new. Stay tuned! (plus you are not supposed to see this revert the blur filter! (or escape f12)) placeholder text to fill up the space'
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
                    <GameCard game={game} appLogo={logo}
                              gameScreen={gameScreen} additionalClasses={undefined}/>
                    <GameCard game={game} appLogo={logo}
                              gameScreen={gameScreen} additionalClasses={undefined}/>
                </div>
                <div className={"divider mx-24 my-8"}></div>
                <h2 className="text-4xl font-bold m-auto bg-gradient-to-br from-pink-500 via-purple-600 to-red-900 text-transparent bg-clip-text filter drop-shadow-2xl
            ">Our Team</h2>
                <div className="grid grid-cols-3 m-auto mt-8">
                    <JobCard name="Dorianne André" jobTitle="Designer   "
                             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempor at, aliquam et eros. Sed vitae nisi euismod, ultricies nunc vitae, ultrices nisl. Sed vitae nisi euismod, ultricies nunc vitae, ultrices nisl."
                             imageUrl="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"/>
                    <JobCard name="Ethan Perrod" jobTitle="CEO / Game Developer"
                             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempor at, aliquam et eros. Sed vitae nisi euismod, ultricies nunc vitae, ultrices nisl. Sed vitae nisi euismod, ultricies nunc vitae, ultrices nisl."
                             imageUrl="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"/>
                    <JobCard name="Mathieu Ponal" jobTitle="Web Developer"
                             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempor at, aliquam et eros. Sed vitae nisi euismod, ultricies nunc vitae, ultrices nisl. Sed vitae nisi euismod, ultricies nunc vitae, ultrices nisl."
                             imageUrl="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"/>
                </div>
                <div className={"divider mx-24 my-8"}></div>
                <div>
                    <h2 className="text-4xl font-bold m-auto bg-gradient-to-br from-pink-500 via-purple-600 to-red-900 text-transparent bg-clip-text filter drop-shadow-2xl mb-8
            ">Thank You !</h2>
                    <Carousel/>
                </div>
            </div>
            <footer className="flex items-center justify-center w-full h-24 mt-16 border-t border-accent">
                <p className="text-xl font-bold">Quasar Entertainment</p>
            </footer>


        </div>
    </ParallaxProvider>);
}

export default App;
