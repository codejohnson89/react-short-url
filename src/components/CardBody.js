import React from 'react';
import Card from 'react-bootstrap/Card';


const CardBody = (props) => {
    const {title, text, image, cname} = props;
    return (
        <>
            <Card className={cname}>
                <Card.Body>
                    <div className="card-image">
                        <img src={image} alt="stats icon"/>
                    </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}


export default CardBody;