import { lazy, Suspense } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { Hero } from "./components/sections/Hero";
import { HowItWorks } from "./components/sections/HowItWorks";
import { WhyOur } from "./components/sections/WhyOur";
import { Web3Community } from "./components/sections/We3Community";
import { Prices } from "./components/sections/Prices";
import { Faqs } from "./components/sections/Faqs";
import { Comments } from "./components/sections/Comments";
import { Footer } from "./components/sections/Footer";
import { AppWalletProvider } from "./providers/AppWalletProvider";

const Nav = lazy(() => import("./components/Nav"));

const NavbarMobileAnimation = lazy(() => import("./components/NavMobile"));

function App() {
    const { width } = useWindowSize();

    return (
        <Suspense fallback={<div></div>}>
            <AppWalletProvider>
                {width && width > 1023 ? <Nav /> : <NavbarMobileAnimation />}
                <Hero />
                <HowItWorks />
                <WhyOur />
                <Web3Community />
                <Prices />
                <Faqs />
                <Comments />
                <Footer />
            </AppWalletProvider>
        </Suspense>
    );
}

export default App;
