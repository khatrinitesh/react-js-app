import React from 'react'
import Logo from '../img/logo1.png';

export default function Banner() {
  return (
    <>
        <div className="banner">
            <div className="banner-overlay"></div>
            <div className="inside-container top-bar">
                <div className="row">
                <div className="col-md-4 top-bar-left order-2 order-md-12">
                    <i className="fas fa-envelope-open-text" />{" "}
                    <a href="mailto:info@domain.net">
                    info@domain.net
                    </a>
                </div>
                <div className="col-md-4 logo order-1 order-md-12">
                    <img
                    className="logo-img"
                    src={Logo}
                    alt="website template image"
                    />
                </div>
                <div className="col-md-4 top-bar-right order-3 order-md-12">
                    <i className="fas fa-phone-alt" />{" "}
                    <a href="tel:+00.1234.567891">
                    +00.1234.567891
                    </a>
                </div>
                </div>
            </div>
            <div className="inside-container banner-content">
                <div className="row">
                    <div className="col-12 content-col">
                        <h1 className="site-title">Be peaceful in mind and healthy in Body!</h1>
                        <p className="site-title-desc">
                        At solmen va esser necessi fa uniform grammatica, pronunciation plu
                        sommun paroles.
                        </p>
                        <a
                        className="banner-btn"
                        href="https://www.free-css.com/free-css-templates"
                        >
                        Join us now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
