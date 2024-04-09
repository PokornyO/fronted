
import './App.css'
import React from 'react'
import ReactConcept from './components/ReactConcept'
import data from './init-data'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/*function App() {

  return (
    <div>
      <ReactConcept title={data[0].title} description={data[0].description}/>
      <ReactConcept title={data[1].title} description={data[1].description}/>
      <ReactConcept title={data[2].title} description={data[2].description}/>
      <ReactConcept title={data[3].title} description={data[3].description}/>
    </div>
  )
}*/
function App() {
  return (
    <Container>
      <Row>
        {data.map((item, index) => (
          <Col key={index} sm={6} md={4} lg={3}> 
            <ReactConcept>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <img src={item.img} className="img-fluid" alt={item.title}/> 
            </ReactConcept>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
export default App
