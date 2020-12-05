import React from 'react';
import Ok from "../assets/images/background/section_ok.png";
import Fade from "react-reveal/Fade";

const About = () => {
    return (
        <section className={"section-about"} id={"about"}>
            <div className={"container-fluid"}>
                <div className={"row about"}>
                    <Fade left>
                        <div className={"col-md-5 col-xs-12 col-sm-12 mt-5"}>
                            <div className={"d-flex align-items-end justify-content-center"}>
                                <img className={"w-75"} src={Ok} alt={"Logo"}/>
                            </div>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className={"col-md-7 col-xs-12 col-sm-12 d-flex align-items-center justify-content-center"}>
                            <div className={"title pl-4 pr-4"}>
                                <h2 className={"text-orange"}>Who Am I</h2>
                                <h1 className={"font-weight-bold "}>Little Boy From Depok</h1>
                                <span className={"underline mb-4"}></span>
                                <p className={"w-75"}>Hello, I am Aria Samudera Elhamidy, i'm Software Engineer based in jakarta
                                    I HI using PHP, Golang and Python for <span className={"text-orange font-weight-bold"}>Tabula APPS</span> and improvement CMS for customer service, besides that i take part time to maintain the website that i used to work on and i also have interest in design UI and frontend tech like vue js and react js </p>
                                <a  href="mailto:ariaelhamidy@gmail.com" className={"btn btn-rounded btn-cv text-align-center"}>Hire Me</a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default About;
