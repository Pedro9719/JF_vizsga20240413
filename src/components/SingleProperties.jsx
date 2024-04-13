import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';


export const SingleProperties = ({ id, category, sellerName, createAt, imageUrl, area, rooms }) => {
    console.log(category);
    return (

        <div>
            <div className="container" style={{ height: '100%' }}>
                <Card style={{ width: '18rem', height: '100%' }}>
                    <img alt={id} src={imageUrl} />
                    <CardBody style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardTitle tag="h5">
                            {category}
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Hirdetés feladásának dátuma: {createAt}
                        </CardSubtitle>
                        <CardText>
                            Szobák száma: {rooms}
                        </CardText>
                        <CardText>
                            Alapterület: {area} m²
                        </CardText>
                        <Button style={{ backgroundColor: 'gray' }}>
                            Eladó: {sellerName}
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

