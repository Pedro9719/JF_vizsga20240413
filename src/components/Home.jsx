import React from 'react'
import './../App.css'
import haz from '../../public/haz.jpg'
import lakas from '../../public/panel.jpg'
import nyaralo from '../../public/nyaralo.jpg'
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'


export const Home = () => {
    return (
        <div>
            <header className='header'>
                <h1 style={{color: '#3730a3'}}>Ingatlaniroda</h1>
            </header>
            <main>
                <h4 style={{textAlign: 'center', color: '#3730a3'}}>Ingatlanok különböző kategóriában</h4>
                <CardGroup className='container justify-content-center'>
                    <Card>
                        <CardImg 
                            alt="Ház"
                            src={haz}
                            top
                            width="100%"
                        />
                        <CardBody >
                            <CardTitle tag="h5" style={{textAlign: 'center', color: '#3730a3'}}>
                                Házak
                            </CardTitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg
                            alt="Lakas"
                            src={lakas}
                            top
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5" style={{textAlign: 'center', color: '#3730a3'}}>
                                Lakások
                            </CardTitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg
                            alt="Nyaralo"
                            src={nyaralo}
                            top
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5" style={{textAlign: 'center', color: '#3730a3'}}>
                                Nyaralók
                            </CardTitle>
                        </CardBody>
                    </Card>
                </CardGroup>
            </main>
            <footer>
                <p>© 2024 JF project. All rights reserved.</p>
            </footer>
        </div>
    )
}

