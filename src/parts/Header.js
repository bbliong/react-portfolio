import React,{useState, useEffect} from 'react'

import {HashLink as Link} from "react-router-hash-link";
import BrandIcon from 'parts/IconText'


const Header = (props) => {

    let listener = null
    const [scrollState, setScrollState] = useState("intro");

    const getNavLinkClassMobile = path => {
        return "#"+scrollState === path ? " active" : "";
    }

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -70;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
        console.log(yCoordinate + yOffset)
    }

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            var scrolled =  window.pageYOffset;

            if(scrolled < 581) {
                setScrollState("intro")
            }else if(scrolled < 1265){
                setScrollState("about")
            }else if(scrolled < 2074){
                setScrollState("specializing")
            }else if(scrolled < 2769){
                setScrollState("education")
            }else{
                setScrollState("project")
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState])

    return (
        <header className="spacing-sm shadow-sm">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light fixed-top bg-white">
                    <BrandIcon/>
                    <span className={"position-absolute"} style={{right: 0}}>
                            <button className="navbar-toggler" type="button" >
                                    <span className="navbar-toggler-icon"/>
                            </button>
                              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                        <li className={`nav-item ${getNavLinkClassMobile("#intro")}`}>
                                            <Link className="nav-link"  smooth to={"#intro"} scroll={el => scrollWithOffset(el)}>Intro</Link>
                                        </li>
                                        <li className={`nav-item ${getNavLinkClassMobile("#about")}`}>
                                            <Link className="nav-link"  smooth to={"#about"} scroll={el => scrollWithOffset(el)}>About Me</Link>
                                        </li>
                                        <li className={`nav-item ${getNavLinkClassMobile("#specializing")}`}>
                                            <Link className="nav-link"  smooth to={"#specializing"} scroll={el => scrollWithOffset(el)}>Specializing</Link>
                                        </li>
                                         <li className={`nav-item ${getNavLinkClassMobile("#education")}`}>
                                            <Link className="nav-link"  smooth to={"#education"} scroll={el => scrollWithOffset(el)}>Education</Link>
                                        </li>
                                         <li className={`nav-item`}>
                                            <Link className="btn btn-orange mr-2 font-weight-bold pl-4 pr-4"  smooth to={"#project"} scroll={el => scrollWithOffset(el)}>Project</Link>
                                        </li>
                                    </ul>
                              </div>
                    </span>
                </nav>
            </div>
        </header>
    )
}

export default Header;
