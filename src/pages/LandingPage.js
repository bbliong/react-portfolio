import React, {Component} from 'react';

import Header from "../parts/Header";
import Intro from "../parts/Intro";
import About from "../parts/About";
import Specializing from "../parts/Specializing";
import Education from "../parts/Education";
import Project from "../parts/Project";
import Footer from "../parts/Footer";
import JSONLanding  from 'json/landingPage.json'

class LandingPage extends Component {
    render() {
        return (
            <>
                <Header {...this.props}/>
                <Intro {...this.props}/>
                <About {...this.props}/>
                <Specializing {...this.props}/>
                <Education {...this.props}/>
                <Project data={JSONLanding.projects}/>
                <Footer {...this.props}/>
            </>
        );
    }
}


export default LandingPage;