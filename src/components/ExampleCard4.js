import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Techblog from './assets/techblog.png'

function ExampleCard4() {
    return (
        <Card style={{ width: '18rem' }} id="ExampleCard4">
            <Card.Img variant="top" src={Techblog} />
            <Card.Body>
                <Card.Title>Tech Blog</Card.Title>
                <Card.Text>
                    This is an app which allows users to share tech related content. Users can post comments as well as being able to comment on other users posts.
                </Card.Text>
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://github.com/TRN10/MVC-tech-blog';
                    }}
                > Github repo</button>
            </Card.Body>
        </Card>
    );
}

export default ExampleCard4;