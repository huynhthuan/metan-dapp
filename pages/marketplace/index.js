import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import FilterCheckBoxItem from '../../components/marketplace/FilterCheckBoxItem';
import HeroList from '../../components/marketplace/HeroList';
import heroData from '../../public/data/heroes';

export default function Marketplace() {
    const [filterState, setFilterState] = useState('');
    return (
        <div className="block block-archive-hero">
            <button
                className="btn btn-filter-mb"
                onClick={() => {
                    setFilterState('active');
                }}
            >
                <FontAwesomeIcon icon={faFilter} />
                Filter hero
            </button>
            <div
                className="page-banner"
                style={{
                    backgroundImage: `url('/img/banner-archive-ship.jpg')`,
                }}
            >
                <div className="banner-content">
                    <div className="banner-titles">
                        <div className="banner-title">THE MARKETPLACE</div>
                    </div>
                    <img
                        src="/img/banner-title-bg.png"
                        className="banner-title-bg"
                    />
                </div>
                <img src="/img/banner-bar.png" className="banner-bar" />
            </div>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="archive-summary">
                            <div className="summary-box">
                                <div className="summary-title">Heros Sold</div>
                                <div className="summary-value">10,146</div>
                            </div>
                            <div className="summary-box">
                                <div className="summary-title">
                                    Total volume
                                </div>
                                <div className="summary-value">18,496 BNB</div>
                            </div>
                            <div className="summary-box">
                                <div className="summary-title">
                                    Highest price
                                </div>
                                <div className="summary-value">200 BNB</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={3}>
                        <div className={`filter-table ${filterState}`}>
                            <div className="filter-header">
                                <div className="filter-title">FILTERS</div>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => {
                                        setFilterState('');
                                    }}
                                >
                                    CLOSE FILTERS
                                </button>
                            </div>
                            <div className="filter-body">
                                <div className="filter-box">
                                    <div className="filter-box-body">
                                        <Form.Select>
                                            <option>Sort by</option>
                                            <option>Highest price</option>
                                            <option>Lower price</option>
                                        </Form.Select>
                                        <Form>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter hero name"
                                                />
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>
                                <div className="filter-box">
                                    <div className="filter-box-header">
                                        <span>Metan Rarity</span>
                                    </div>
                                    <div className="filter-box-body">
                                        <div className="filter-list">
                                            <FilterCheckBoxItem
                                                title={'Common'}
                                                titleColorClass={'t-common'}
                                            ></FilterCheckBoxItem>
                                            <FilterCheckBoxItem
                                                title={'Uncommon'}
                                                titleColorClass={'t-uncommon'}
                                            ></FilterCheckBoxItem>
                                            <FilterCheckBoxItem
                                                title={'Rare'}
                                                titleColorClass={'t-rare'}
                                            ></FilterCheckBoxItem>
                                            <FilterCheckBoxItem
                                                title={'Elite'}
                                                titleColorClass={'t-elite'}
                                            ></FilterCheckBoxItem>
                                            <FilterCheckBoxItem
                                                title={'Legendary'}
                                                titleColorClass={'t-legendary'}
                                            ></FilterCheckBoxItem>
                                            <FilterCheckBoxItem
                                                title={'Mythic'}
                                                titleColorClass={'t-mythic'}
                                            ></FilterCheckBoxItem>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-box">
                                    <div className="filter-box-header">
                                        <span>PvE Element</span>
                                    </div>
                                    <div className="filter-box-body">
                                        <div className="filter-list">
                                            <FilterCheckBoxItem
                                                title={'Agility'}
                                                icon={'attribute-agility'}
                                                titleColorClass={'t-violet'}
                                            ></FilterCheckBoxItem>
                                            <FilterCheckBoxItem
                                                title={'Intel'}
                                                icon={'attribute-intelligence'}
                                                titleColorClass={'t-dark'}
                                            ></FilterCheckBoxItem>
                                            <FilterCheckBoxItem
                                                title={'Strength'}
                                                icon={'attribute-strength'}
                                                titleColorClass={'t-yellow'}
                                            ></FilterCheckBoxItem>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-box">
                                    <div className="filter-box-header">
                                        <span>PvP Elenment</span>
                                    </div>
                                    <div className="filter-box-body">
                                        <div className="filter-list">
                                            <FilterCheckBoxItem
                                                title={'Warrior'}
                                                icon={'warrior'}
                                                titleColorClass={'t-violet'}
                                            ></FilterCheckBoxItem>
                                            <FilterCheckBoxItem
                                                title={'Priest'}
                                                icon={'priest'}
                                                titleColorClass={'t-dark'}
                                            ></FilterCheckBoxItem>
                                            <FilterCheckBoxItem
                                                title={'Mage'}
                                                icon={'mage'}
                                                titleColorClass={'t-yellow'}
                                            ></FilterCheckBoxItem>
                                            <FilterCheckBoxItem
                                                title={'Assassin'}
                                                icon={'assassin'}
                                                titleColorClass={'t-blue'}
                                            ></FilterCheckBoxItem>
                                            <FilterCheckBoxItem
                                                title={'Ranger'}
                                                icon={'ranger'}
                                                titleColorClass={'t-orange'}
                                            ></FilterCheckBoxItem>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-clear-filter w-100 mt-2">
                                    CLEAR FILTERS
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <HeroList
                            col={4}
                            dataList={heroData}
                            limit={24}
                            isShowPagination={true}
                        ></HeroList>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
