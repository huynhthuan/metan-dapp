import React from 'react';
import { Col } from 'react-bootstrap';
import Link from 'next/link';

export default function HeroItem({ col, dataHero }) {
    const renderStar = (starNum) => {
        let htmlStar = [];
        for (let star = 0; star < starNum; star++) {
            htmlStar.push(
                <img
                    key={star}
                    src="/img/decoration/star-active.png"
                    alt="star"
                />
            );
        }
        for (let star = 0; star < 5 - starNum; star++) {
            htmlStar.push(
                <img
                    key={`i${star}`}
                    src="/img/decoration/star-inactive.png"
                    alt="star"
                />
            );
        }
        return htmlStar;
    };
    return (
        <Col lg={col} className="hero-item-wrap">
            <Link href="#">
                <a className="hero-item">
                    <div className="hero-item-name-meta">
                        <div className="hero-name">{dataHero.name}</div>
                        <div className="hero-star">
                            {renderStar(dataHero.star)}
                        </div>
                    </div>
                    <div className="hero-item-content">
                        <div className="hero-body">
                            <div className="hero-item-img">
                                <img src={dataHero.image} />
                            </div>
                        </div>
                    </div>
                    <div className="hero-item-footer">
                        <div className="hero-item-meta-sub">
                            <div className="hero-id">#{dataHero.id}</div>
                            <div className="hero-type">
                                Type {dataHero.type}
                            </div>
                        </div>
                        <div className="hero-meta-stat">
                            <div className="hero-meta">
                                <div className="hero-class">
                                    {dataHero.class}
                                </div>
                                <div className="hero-level">
                                    <img
                                        src="/img/decoration/ic-lv.png"
                                        alt="level"
                                    />
                                    <span>{dataHero.level}</span>
                                </div>
                            </div>
                            <div className="hero-stat">
                                <div className="stat-box">
                                    <div className="stat-icon">
                                        <img src="/img/decoration/ic-atk.png" />
                                    </div>
                                    <div className="stat-value">
                                        {dataHero.stats['attack']}
                                    </div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-icon">
                                        <img src="/img/decoration/ic-def.png" />
                                    </div>
                                    <div className="stat-value">
                                        {dataHero.stats['armor']}
                                    </div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-icon">
                                        <img src="/img/decoration/ic-hp.png" />
                                    </div>
                                    <div className="stat-value">
                                        {dataHero.stats['hp']}
                                    </div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-icon">
                                        <img src="/img/decoration/ic-speed.png" />
                                    </div>
                                    <div className="stat-value">
                                        {dataHero.stats['speed']}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </Col>
    );
}
