import React from 'react';
import ThinkingIcon from "assets/images/background/section_thinking.png";


import VueIcon from "assets/images/icons/skill/vue.png"
import ReactIcon from "assets/images/icons/skill/react.png"
import PythonIcon from "assets/images/icons/skill/python.png"
import LaravelIcon from "assets/images/icons/skill/laravel.png"
import GolangIcon from "assets/images/icons/skill/golang.png"
import PolymerIcon from "assets/images/icons/skill/polymer.png"
import JsIcon from "assets/images/icons/skill/js.png"
import PhpIcon from "assets/images/icons/skill/php.png"

import AiIcon from "assets/images/icons/software/ai.png"
import PSIcon from "assets/images/icons/software/ps.png"
import FigmaIcon from "assets/images/icons/software/figma.png"
import XDIcon from "assets/images/icons/software/xd.png"

import Fade from "react-reveal/Fade";

const Specializing = () => {
    return (
        <section className={"section-specializing"} id={"specializing"}>
            <div className={"container-fluid mt-5"}>
                <div className={"row specializing p-5"}>
                    <Fade top>
                        <div className={"col-md-6 col-xs-12 col-sm-12 d-md-none d-xl-none"}>
                            <div>
                                <div className={"title pl-4 pr-4 text-center mb-5"}>
                                    <h2 className={"text-orange"} style={{lineHeight:"5px"}}>What Can I Do For You ?</h2>
                                    <h1 className={"font-weight-bold "} style={{lineHeight:"50px"}}>Specializing IN</h1>
                                    <span className={"underline mb-4"} style={{position: "absolute", right : "30px"}}></span>
                                </div>
                                <div className={"d-flex align-items-center justify-content-center"}>
                                    <img className={"w-75"} src={ThinkingIcon} alt={"Logo"}/>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className={"col-md-6 col-xl-6"}>
                            <div className={"row"}>
                                <div className={"col-md-6"}>
                                    <h3 className={"font-weight-bold"}>Develop Website and
                                        Mobile apps what you
                                        want.</h3>
                                    <p>I can relize your request for creating
                                        website and mobile apps, i'm specialize
                                        in PHP and Vue.JS, but don't worry if
                                        you you want to create in another
                                        languange i can do it for you with the best what i can.</p>
                                </div>
                                <div className={"col-md-6  d-flex justify-content-end align-items-end"}>
                                    <div className={"skill"}>
                                        <h3 className={"font-weight-bold"}>Language & Framework what i used to work</h3>
                                        <div className={"skill-set d-flex justify-content-between"}>
                                            <img src={PhpIcon} alt=""/>
                                            <img src={JsIcon} alt=""/>
                                            <img src={GolangIcon} alt=""/>
                                            <img src={PythonIcon} alt=""/>
                                        </div>
                                        <div  className={"skill-set  d-flex justify-content-between"}>
                                            <img src={PolymerIcon} alt=""/>
                                            <img src={LaravelIcon} alt=""/>
                                            <img src={VueIcon} alt=""/>
                                            <img src={ReactIcon} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col-md-6  d-flex justify-content-start align-items-start mt-3"}>
                                    <div className={"skill"}>
                                        <h3 className={"font-weight-bold"}>Design Apps What I Used</h3>
                                        <div className={"skill-set d-flex justify-content-between"}>
                                            <img src={PSIcon} alt=""/>
                                            <img src={XDIcon} alt=""/>
                                            <img src={AiIcon} alt=""/>
                                            <img src={FigmaIcon} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col-md-6  d-flex justify-content-start align-items-start mt-4"}>
                                    <div className={"skill"}>
                                        <h3 className={"font-weight-bold"}>Create Design as you go</h3>
                                        <p>If you want to create website or
                                            apps  with unique design, you can hire me,i can create design UI
                                            for you </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={"col-md-6 col-xs-12 col-sm-12 d-none d-md-block"}>
                            <div className={"title pl-4 pr-4 text-right mb-3"}>
                                <h2 className={"text-orange"}>What Can I Do For You ?</h2>
                                <h1 className={"font-weight-bold "}>Specializing IN</h1>
                                <span className={"underline mb-4"} style={{position: "absolute", right : "30px"}}></span>
                            </div>
                            <div className={"d-flex align-items-end justify-content-end"}>
                                <img className={"w-75"} src={ThinkingIcon} alt={"Logo"}/>
                            </div>
                        </div>
                    </Fade>

                </div>

            </div>
        </section>
    );
};

export default Specializing;
