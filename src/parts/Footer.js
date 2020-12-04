import React from 'react';

import GithubIcon from "assets/images/icons/github.png"
import LinkedinIcon from "assets/images/icons/linkedin.png"
import InstagramIcon from "assets/images/icons/instagram.png"

const Footer = () => {
    return (
        <>
            <div className={"container-fluid"}>
                <div className={"row footer"}>
                    <div className={"col-md-12 text-center"}>
                        <h1 className={"font-weight-bold mt-4"}>Get In Touch</h1>
                        <p className={"text-center"}>For business inquiry please send email to <br/>ariaelhamidy@gmail.com
                        </p>
                        <div className={"social-media"}>
                            <a href="https://www.linkedin.com/in/aria-elhamidy/" target={"_blank"}><img
                                className={"icon"} src={LinkedinIcon} alt=""/></a>
                            <a href="https://github.com/bbliong" target={"_blank"}><img className={"icon"}
                                                                                        src={GithubIcon} alt=""/></a>
                            <a href="https://www.instagram.com/ariaelhamidy/" target={"_blank"}><img className={"icon"}
                                                                                                     src={InstagramIcon} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
