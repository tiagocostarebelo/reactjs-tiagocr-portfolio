import React from 'react'
import logoHrz from '../../assets/tcr_logo_hrz.svg';
import instaLogo from '../../assets/instagram.svg';
import gitHubLogo from '../../assets/gitHub.svg';
import { NavLink } from 'react-router';
import Button from './Button';

const Footer = () => {
    return (
        <footer className="w-full h-auto py-24 px-6 md:px-12" >
            <div className="flex flex-col items-center gap-y-12 mb-12">
                <div>
                    <Button as="navlink" to="/">
                        <img className="w-40 md:w-50" src={logoHrz} alt="TiagoCR Logo" />
                    </Button>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-x-12 justify-center">
                        <Button as="href" href="https://www.instagram.com/tiagocr.me/">
                            <img src={instaLogo} alt="Instagram" className="w-[40px]" />
                        </Button>
                        <Button as="href" href="https://github.com/tiagocostarebelo">
                            <img src={gitHubLogo} alt="GitHub" className="w-[40px] mb-[2px]" />
                        </Button>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Button as="href" href="/privacy-policy">Privacy Policy</Button>
                        <Button as="href" href="/terms-and-conditions">Terms & Conditions</Button>
                    </div>
                </div>
            </div>
            <p className="text-base text-dark-gray text-center">Copyright © 2025 Tiago Costa Rebelo - All rights reserved.</p>
        </footer>
    )
}

export default Footer