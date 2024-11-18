import { Logo } from "./Logo";
import { Button } from "./Button";
import GlobalIcon from "../assets/icons/Global.svg";
import { NAV_LINKS } from "../configs/route";
import { WalletMultiButton } from "./WalletButton/WalletMultiButton";

const Nav = () => {
    return (
        <>
            <nav className="container mt-6 flex items-center justify-between">
                <div className="flex items-center">
                    <Logo />
                    <ul className="ml-[113px] flex gap-7">
                        {NAV_LINKS.map((link, index) => (
                            <li key={index}>
                                <a href={link.url}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-1">
                        <Button variant="button-white">Download Now</Button>

                        <WalletMultiButton className="button button-dark-border" />
                    </div>
                    <div className="ml-2 grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-white">
                        <img
                            src={GlobalIcon}
                            alt="GlobalIcon"
                            className="h-[22px] w-[22px]"
                        />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
