import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';



const Footer = () => {
    return (
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center my-4 border-top border-2 border-dark">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-dark text-decoration-none lh-1"></a>
                    <span class="text-dark fw-bold">© 2021 UncoverTech, Inc</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3 icon"><a class="text-dark" href="#"><FacebookIcon style={{fontSize:25}} /></a></li>
                    <li class="ms-3 icon"><a class="text-dark" href="#"><InstagramIcon style={{fontSize:25}} /></a></li>
                    <li class="ms-3 icon"><a class="text-dark" href="#"><TwitterIcon style={{fontSize:25}} /></a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;