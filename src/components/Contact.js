import React from 'react'
import Hero3 from './assets/tj-hero-3.png'

// export default function Contact() {
//     return (
//         <div><img src={Hero3} className="d-block w-100" alt="..." /></div>
//     )
// }

import Card from 'react-bootstrap/Card';

function ImgOverlayExample() {
    return (
        <Card className="bg-dark text-white">
            <Card.Img src={Hero3} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    <h2>This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.</h2>
                    <h2 id="email"><a href="mailto: trentanjurkans@gmail.com">email</a></h2>
                    <h2 ><a href="https://github.com/TRN10" target="_blank">Github</a></h2>
                    <h2><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></h2>
                    <h2><a href="https://www.linkedin.com" target="_blank">resume</a></h2>
                </Card.Text>

            </Card.ImgOverlay>
        </Card>
    );
}

export default ImgOverlayExample;