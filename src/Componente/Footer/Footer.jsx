import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer__container'>

                <div className="gitHubCode">
                    <img src="./Assets/github-white.png" alt="github logo" />
                    <span>
                        Mirá este código en
                        <Link to="https://github.com/GastonYasuda/presu-cuadros" target="_blank"> github.com/GastonYasuda </Link>
                    </span>
                </div>


                <div className="linkedinLink">
                    <img src="./Assets/linkedin-logo.png" alt="linkedin logo" />
                    <span>
                        Mirá mi perfir en
                        <Link to="https://www.linkedin.com/in/gaston-yasuda/" target="_blank"> linkedin.com/in/gaston-yasuda/ </Link>
                    </span>
                </div>

                <div className="webLink">
                    <img src="./Assets/webLogo.png" alt="my web logo" />
                    <span>
                        Conocé mis proyectos en
                        <Link to="https://gastonyasudaportfolio.netlify.app/" target="_blank"> gastonyasuda.netlify </Link>
                    </span>
                </div>


            </div>
        </section>
    )
}

export default Footer
