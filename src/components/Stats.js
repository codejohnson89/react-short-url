import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import CardBody from './CardBody';

import recognition from '../imgs/recognition.svg';
import records from '../imgs/records.svg';
import customizable from '../imgs/customizable.svg';


const Stats = () => {
    return (
        <>
            <Container className="stats">
                <Row>
                    <div className="intro">
                        <h2>advanced statistics</h2>
                        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                    </div>
                    <div className="card-group">
                        <CardBody cname="first" image={recognition} title="brand recognition" text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."/>
                        <CardBody cname="second" image={records} title="detailed records" text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."/>
                        <CardBody cname="third" image={customizable} title="fully customizable" text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."/>
                    </div>
                    <div className="blueBar"></div>
                </Row>
            </Container>
        </>
    )
}

export default Stats;