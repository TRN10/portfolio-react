import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Realocator from './assets/realocator.png'

function ExampleCard2() {
    return (
        <Card style={{ width: '18rem' }} id="ExampleCard2">
            <Card.Img variant="top" src={Realocator} />
            <Card.Body>
                <Card.Title>Realocator</Card.Title>
                <Card.Text>
                    Realocator is a simple web app that allows people to: Search for properties for sale in a specified location, Make a shortlist of those preferred properties and check the weather for those shortlisted properties
                </Card.Text>
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://trn10.github.io/realocator/';
                    }}
                > Github pages</button>
            </Card.Body>
        </Card>
    );
}

export default ExampleCard2;