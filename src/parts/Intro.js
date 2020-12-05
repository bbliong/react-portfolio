import React from 'react';

import LogoHalo from "assets/images/background/Greeting.svg"
import LogoOrang from "assets/images/background/Me.png"
import PartikelLeft from "assets/images/background/partikel-grid-left.svg"
import PartikelRight from "assets/images/background/Partikel-grid-right.svg"
import Partikels from "assets/images/background/partikels.svg"
import Fade from "react-reveal/Fade";

const Intro = (props) => {
    return (
        <section id={"intro"} className={"section-intro"}>
            <span>
                <img src={PartikelLeft} className={"partikel-left"} alt={"Partikel Left"}/>
            </span>
            <span>
                <img src={PartikelRight}  className={"partikel-right"}  alt={"Partikel Right"}/>
            </span>
            <span>
                <img src={Partikels}  className={"partikels"}  alt={"Partikels"}/>
            </span>
            <div className={"container-fluid"}>
                <div className={"row intro"}>
                    <Fade left>
                        <div className={"col-md-4 col-xs-12 col-sm-12"} style={{maxHeight: "250px"}}>
                            <div className={"d-flex align-items-end justify-content-center"}>
                                <img className={"pl-3 pt-5"} src={LogoHalo} alt={"Logo"}/>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={"col-md-4 d-none d-md-block d-xl-block"}>
                            <div className={"d-flex align-items-end justify-content-center"}>
                                <img src={LogoOrang} className={"mt-5 w-100"} alt={"Logo"}/>
                            </div>
                        </div>
                    </Fade>

                    <Fade right cascade>
                        <div className={"col-md-4 col-xs-12 col-sm-12 d-flex align-items-center justify-content-center"}>
                            <div className={"title"}>
                                <h1 className={"text-indigo h2"}>Aria Samudera Elhamidy</h1>
                                <h1 className={"text-orange h1 mt-0 font-weight-bold"}>Software Egnineer</h1>
                                <a href="mailto:ariaelhamidy@gmail.com" className={"btn btn-rounded btn-hire"}>Hire Me</a>
                            </div>
                        </div>
                    </Fade>

                </div>
            </div>
            <span className={"devider"}/>
        </section>
    );
};

export default Intro;
