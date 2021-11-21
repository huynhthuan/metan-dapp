import React from 'react';
import { Row, Pagination } from 'react-bootstrap';
import HeroItem from './HeroItem';

export default function HeroList({
    col,
    dataList,
    limit = 12,
    isShowPagination = false,
}) {
    return (
        <div className="ship-list">
            <Row>
                {dataList.slice(0, limit).map((hero, index) => (
                    <HeroItem col={col} dataHero={hero} key={index} />
                ))}
            </Row>
            <Row className={isShowPagination ? '' : 'd-none'}>
                <div className="ship-list-pagination">
                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item active>{4}</Pagination.Item>
                        <Pagination.Item>{5}</Pagination.Item>
                        <Pagination.Item>{6}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </div>
            </Row>
        </div>
    );
}
