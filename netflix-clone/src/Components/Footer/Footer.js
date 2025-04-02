import React from "react"
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer=()=>{
    return(
        <div className="Footer_outer_container">
            <div className="header_container">
                <div className="Left">
                    <div>
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <YouTubeIcon/>
                    </div>
                    <div >
                        <ul style={{listStyle: 'none'}}>
                            <li>Audio Description</li>
                            <li>Invester Relations</li>
                            <li>Legal Notice</li>
                        </ul>
                     </div>
                 </div>
                    <div className="Middle">
                        <ul style={{listStyle: 'none'}}>
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>Cookie Preferences</li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{listStyle: 'none'}}>
                            <li>Gift Cards</li>
                            <li>Terms of User</li>
                            <li>Corporate Information</li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{listStyle: 'none'}}>
                            <li>Media Center</li>
                            <li>privacy</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
       
    )
}
export default Footer;