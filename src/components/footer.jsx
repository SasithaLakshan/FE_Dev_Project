import { React } from 'react';
import './footer.scss'
import logo from '/Logo.svg';

const Footer = () => {
    return (
        <footer>
            <div className='wrapper'>
                <div className='footer_line_1'>
                    <div className='footer_logo'>
                        <img src={logo} />
                    </div>
                    <div className='para'>
                        <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                    </div>
                </div>
                <div className='footer_line_2'>
                    <h2>Our Technologies</h2>
                    <p>React Js</p>
                    <p>Gatsby Js</p>
                    <p>Next Js</p>
                    <p>Node Js</p>
                </div>
                <div className='footer_line_3'>
                    <h2>Our Services</h2>
                    <p>Social Media Marketing</p>
                    <p>Web & Mobile App Development</p>
                    <p>Data & Analysis</p>
                </div>
            </div>
            <div className='bottom_content'>
                <span className='hr_line'></span>
                <div className='typos'>
                    <p>Privacy Policies</p>
                    <span></span>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;