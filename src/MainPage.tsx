import {Parallax, ParallaxBanner, useParallax} from "react-scroll-parallax";
import {BannerLayer} from "react-scroll-parallax";
const MainPage = () => {const background: BannerLayer = {
    image:
      'https://i.redd.it/9w4m91k1yax11.jpg',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [-10, 40],
    scale: [1, 3, 'easeInQuad'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[200px] font-bold m-auto bg-gradient-to-br from-pink-500 via-purple-600 to-red-900 text-transparent bg-clip-text filter drop-shadow-2xl
            ">Quasar Studio</h1>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    image:
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png',
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1.1],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-blue-900" />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="aspect-[2/1] bg-gray-900 h-screen"
    />
  );
};

export default MainPage;
