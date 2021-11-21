import React, { useState } from 'react';
import { Col } from 'react-bootstrap';

export default function Navbar() {
    const [show, setShow] = useState(false);
    const onToggleClick = () => {
        setShow(!show);
    };

    return (
        <header className="box-header" id="box-header">
            <div className="menu">
                <div className="container">
                    <div className="menu-wrap">
                        <div className="row">
                            <Col md={2}>
                                <div className="logo-wrapper">
                                    <img
                                        src="/img/logo.png"
                                        className="logo button-effect"
                                    />
                                </div>
                            </Col>
                            <Col md={8}>
                                <div
                                    className={`d-xl-flex menu-list ${
                                        show ? 'active' : ''
                                    }`}
                                >
                                    <ul className="top-nav">
                                        <li className="top-nav-item">
                                            <a href="" target="_blank">
                                                MARKETPLACE
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="menu-mobile">
                                    <li
                                        onClick={onToggleClick}
                                        className={`menu-bars-mobile float-right ${
                                            show ? 'active' : ''
                                        }`}
                                    >
                                        <img src="/img/menu.png"></img>
                                    </li>
                                </div>
                                <div className="d-block d-md-none hamber"></div>
                            </Col>
                            <Col md={2}></Col>
                        </div>
                        <div className="signature-wrapper">
                            <a
                                href="#"
                                className="signature-button button-effect"
                            >
                                <img src="/img/play_now.png" className="icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
