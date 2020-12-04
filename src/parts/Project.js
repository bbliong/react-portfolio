import React from 'react';

import Fade from "react-reveal/Fade";

const Project = (props) => {
    return (
        <section className={"project-section"} id={"project"}>
            <div className={"container-fluid mt-5"}>
                <div className={"row project"}>
                    <Fade>
                        <div className={"col-md-5 col-xs-12 col-sm-12 pl-5 mt-5"}>
                            <div className={"title pl-4 pr-4 text-left mb-5 "}>
                                <h2 className={"text-orange"} style={{lineHeight: "5px"}}>Portfolio</h2>
                                <h1 className={"font-weight-bold "} style={{lineHeight: "50px"}}>Here is my recent
                                    project</h1>
                                <span className={"underline mb-4"} style={{position: "absolute"}}></span>
                            </div>
                        </div>

                    </Fade>

                    <div className={"col-md-12"}>

                        <div
                            className="row  pl-5 text-center d-flex justify-content-center align-items-center">
                            {
                                props.data.map((item, index) => {
                                    return (
                                        <Fade>
                                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 container-card ">
                                                <a href={item.project_url} key={index} target={"_blank"}>
                                                    <div className="ver_mas text-center">
                                                        <span className="lnr lnr-eye"></span>
                                                    </div>
                                                    <article className="text-left">
                                                        <h2>{item.name} </h2>
                                                        <h4>{item.description}</h4>
                                                    </article>
                                                    <img
                                                        src={item.img_url}
                                                        alt=""/>
                                                </a>
                                            </div>
                                        </Fade>
                                    )
                                })
                            }
                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
};

export default Project;
