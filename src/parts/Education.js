import React from 'react';
import ThinkingIcon from "../assets/images/background/section_thinking_2.png";

import Fade from "react-reveal/Fade";

const Education = () => {
    return (
        <section className={"section-education"} id={"education"}>
            <div className={"container-fluid mt-5"}>
                <div className={"row education"}>
                    <Fade left>
                        <div className={"col-md-5 col-xs-12 col-sm-12 pl-5 "}>
                            <div className={"title pl-4 pr-4 text-left mb-5 "}>
                                <h2 className={"text-orange"} style={{lineHeight:"5px"}}>Work</h2>
                                <h1 className={"font-weight-bold "} style={{lineHeight:"50px"}}>My Journey</h1>
                                <span className={"underline mb-4"} style={{position: "absolute"}}></span>
                            </div>

                            <div className={"img d-flex align-items-start justify-content-start"}>
                                <img className={"w-75"} src={ThinkingIcon} alt={"Logo"}/>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={"col-md-7 col-xs-12 col-sm-12 d-flex align-items-center justify-content-center"}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-timeline4">
                                            <Fade right>
                                                <div className="timeline">
                                                    <a href="https://vm.lepkom.gunadarma.ac.id/" target={"_blank"} className="timeline-content text-decoration-none">
                                                        <div className="inner-content ml-2">
                                                            <h4 className="title text-left text-orange">2016-2019</h4>
                                                            <h3 className="font-weight-bold text-indigo">Gunadarma
                                                                University</h3>
                                                            <p className="description">
                                                                As Assistant and instructor of several Programming Language
                                                                level in Lembaga Pengembangan Komputerisasi (Lepkom)
                                                            </p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </Fade>
                                            <Fade left>
                                                <div className="timeline">
                                                    <a href="https://simpus.tangerangselatankota.go.id/"  target={"_blank"} className="timeline-content text-decoration-none">
                                                        <div className="inner-content text-right mr-2">
                                                            <h4 className="title text-right text-orange">Mar 2019 - Jun
                                                                2019</h4>
                                                            <h3 className="font-weight-bold text-indigo">BPPT - BJIK (Part
                                                                Time)</h3>
                                                            <p className="description">
                                                                Maintaning and Create new modules in Information System of
                                                                Puskesmas (Simpus) Tangsel & Bogor City using Codeigniter with the concept
                                                                of HMVC and Mysql.
                                                            </p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </Fade>
                                            <Fade right>
                                                <div className="timeline">
                                                    <a href="https://missi-track.com"  target={"_blank"} className="timeline-content text-decoration-none" >
                                                        <div className="inner-content ml-2">
                                                            <h4 className="title text-left text-orange">Dec 2018 - Now</h4>
                                                            <h3 className="font-weight-bold text-indigo">MIssi - Web Developer
                                                                (Part Time)</h3>

                                                            <p className="description">
                                                                Developing Vessel Tracking System for PT. Mitra Niaga Sukses
                                                                Indonesia
                                                            </p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </Fade>
                                            <Fade left>
                                                <div className="timeline">
                                                    <a href="https://tabula.co.id"  target={"_blank"} className="timeline-content mr-2 text-decoration-none">
                                                        <div className="inner-content text-right">
                                                            <h4 className="title text-right text-orange">Sep 2019 - Now</h4>
                                                            <h3 className="font-weight-bold text-indigo">Tabula - Software
                                                                Engineer</h3> <p className="description">Develop API with PHP, Golang & Python for supporting business process
                                                            - Maintaning and improvement CMS for supporting customer service
                                                            - Implement queue process to handle async task for notification
                                                        </p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </Fade>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                   </div>
            </div>
        </section>
    );
};

export default Education;
