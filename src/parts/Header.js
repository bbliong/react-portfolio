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

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

    return (
        <header className="spacing-sm shadow-sm">
            <title>Portfolio</title>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light fixed-top bg-white">
                    <BrandIcon/>
                    <button className="navbar-toggler position-absolute" style={{right: 0}} type="button" aria-expanded={!isNavCollapsed ? true : false} onClick={handleNavCollapse} >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse  bg-white`} id="navbarTogglerDemo01">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
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
                </nav>
            </div>
        </header>
    )
}

export default Header;
