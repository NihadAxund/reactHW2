import React from 'react'
import {
    Card, CardBody, CardTitle, CardText, Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';





export default function Moviecomponent({film}) {

    return (
        <Card className='bg-dark text-light moviedes'
            style={{
                width: '19rem',
                height: 'auto',
                margin: 'auto',
                marginTop: '15px',
                marginLeft: '25px',
                marginRight: '25px'


            }}>
            <CardBody className='d-flex flex-column p-0 m-0'>
                <div className='container d-flex flex-column'>
                    <Col className="m-2" xs="12" md="12">
                        <CardTitle tag="h4">
                            {film.name}
                        </CardTitle>
                    </Col>

                    <Col className="bg-dark" xs="12" md="12">
                        <img

                            alt="Card cap"
                            src={film.Image}
                            width="100%"
                            style={{ minHeight: '250px',maxHeight:'350px' }}
                        />
                    </Col>

                    <Col className="d-flex flex-column  align-items-center  m-1 p-0" xs="12" md="12">

                        <CardText className='text-center' style={{height:'80px',overflow:'scroll'}}>
                            {film.about}
                        </CardText>
                        <button className="btn btn-warning btn-block m-1">Click</button>
                    </Col>
                </div>
            </CardBody>
        </Card >

    )
}
