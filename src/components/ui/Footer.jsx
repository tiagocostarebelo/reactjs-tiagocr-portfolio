import React from 'react'
import logoHrz from '../../assets/tcr_white_hr.svg';
import instaLogo from '../../assets/instagram.svg';
import gitHubLogo from '../../assets/gitHub.svg';
import behanceLogo from "../../assets/behance_icon.svg";
import Button from './Button';

const Footer = () => {
    return (
        <footer className="py-24 px-6 md:px-12 bg-black-rich" >
            <div className="flex flex-col items-center gap-y-6 mb-24">
                <div>
                    <Button as="navlink" to="/">
                        <img className="w-40 md:w-50" src={logoHrz} alt="TiagoCR Logo" />
                    </Button>
                </div>


                <div className="flex items-center gap-x-12 justify-center">
                    <Button as="href" href="https://www.instagram.com/tiagocr.me/">
                        <img src={instaLogo} alt="Instagram" className="w-[30px]" />
                    </Button>
                    <Button as="href" href="https://github.com/tiagocostarebelo">
                        <img src={gitHubLogo} alt="GitHub" className="w-[30px] mb-[2px]" />
                    </Button>
                    <Button as="href" href="https://www.behance.net/tiagocostarebelo">
                        <img src={behanceLogo} alt="Behance" className="w-[40px] mb-[2px]" />
                    </Button>
                </div>
            </div>
            <div className="flex gap-10 items-center justify-center text-sm text-white mb-4">
                <Button as="link" to="/privacy-policy">Privacy Policy</Button>
                <Button as="link" to="/terms-and-conditions">Terms & Conditions</Button>
            </div>
            <p className="font-thin text-sm text-white text-center">Copyright © {new Date().getFullYear()} Tiago Costa Rebelo - All rights reserved.</p>
        </footer>
    )
}

export default Footer