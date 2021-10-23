import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';


const Jumbotron = () => {
    return (
        <>
        <Container className="jumbotron-content">
            <Row>
                <div className="text-content">
                    <h1>More than &nbsp;just shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <a href="/" className="btn">get started</a>
                </div>
            </Row>
        </Container>
        </>
    )
}


export default Jumbotron;