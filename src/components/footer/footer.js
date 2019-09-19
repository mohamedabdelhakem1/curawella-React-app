import React from 'react';
import './footer.css';
import google from './google_play.png'
import apple from './Apple_Store_logo.png';
class Footer extends React.Component {
    home = ['Doctors', 'Symptoms', 'Our partners', 'Contact Us'];
    popularSearch = ['Urology', 'Cardio', 'Urology', 'Symptom 1'];
    links = ['Facebook link', 'Twitter link', 'Youtube link', 'Linkedin link'];

    render() {

        return (<footer className="footer">
            <div className="column">
                <h3 className="h3">Home</h3>
                {this.home.map((str) => (<p><a className="p" href="/*">{str}</a></p>))}
            </div>
            <div className="column">
                <h3 className="h3">Popular Search</h3>
                {this.popularSearch.map((str) => (<p><a className="p" href="/*">{str}</a></p>))}
            </div>
            <div className="column">
                <h3 className="h3">Follow us on</h3>
                {this.links.map((str) => (<p><a className="p" href="/*">{str}</a></p>))}

            </div>
            <div className="column">
                <h3 className="Download">Download our app</h3>
                <div className="icons"> <p>
                    <a cals href="/*"><img className="google" src={google} alt="google_play_logo"></img></a>
                </p>
                    <p>
                        <a cals href="/*"><img className="apple" src={apple} alt="apple_store_logo"></img></a>
                    </p>
                </div>

            </div>

        </footer>);
    }
}

export default Footer;