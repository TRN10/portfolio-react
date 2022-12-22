import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tj from './assets/tj.png'

function ExampleCard() {
    return (
        <Card style={{ width: '18rem' }} id="ExampleCard">
            <Card.Img variant="top" src={Tj} />
            <Card.Body>
                <Card.Title>Contact</Card.Title>
                <Card.Text>

                    <h5 id="email"><a href="mailto: trentanjurkans@gmail.com">email</a></h5>
                    <h5><a href="https://github.com/TRN10" target="_blank">Github</a></h5>
                    <h5><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></h5>
                    <h5><a href="https://www.linkedin.com" target="_blank">resume</a></h5>
                </Card.Text>

            </Card.Body>
        </Card>
    );
}

export default ExampleCard;