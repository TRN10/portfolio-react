import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Weather from './assets/weather.png'

function ExampleCard3() {
    return (
        <Card style={{ width: '18rem' }} id="ExampleCard3">
            <Card.Img variant="top" src={Weather} />
            <Card.Body>
                <Card.Title>Weather Dashboard</Card.Title>
                <Card.Text>
                    Weather dashboard is an application which uses api calls to get weather information from openweather.com
                </Card.Text>
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://trn10.github.io/weather-dashboard/';
                    }}
                > Github pages</button>
            </Card.Body>
        </Card>
    );
}

export default ExampleCard3;