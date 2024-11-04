import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import Footer from './Footer';
import {  Button,Card, Col, Container, Row } from 'react-bootstrap';
import { blog } from './Data/blogs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {
  let headerInfo= {
   email : 'shubham@gmail.com',
   phone : '9702685355'
  }
  return (
    <div className="main">
     <Header  headerInfo={headerInfo} cname= ' shubham'>
      <h1>Welcome to Header Section</h1>
      <FontAwesomeIcon icon={faWhatsapp} className='text-danger' style={{ height: '48px', width: 'auto' }} />
      <br/>
      <FontAwesomeIcon icon={faPhone} className='text-danger' style={{ height: '48px', width: 'auto' }}/>
      </Header>
      {/* <Container fluid>
        <Container>
        <Row>
          <Col className='col-12 text-center py-4' >
          <h1> Our Courses</h1>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
            
           <Card.Body>
             <Card.Title>Course</Card.Title>
            <Card.Text>
            Some quick example text to build on the Course and make up the
             bulk of the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
            
            </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
            
           <Card.Body>
             <Card.Title>Course</Card.Title>
            <Card.Text>
            Some quick example text to build on the Course and make up the
             bulk of the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
            </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
            
           <Card.Body>
             <Card.Title>Course</Card.Title>
            <Card.Text>
            Some quick example text to build on the Course and make up the
             bulk of the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
            </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
            
           <Card.Body>
             <Card.Title>Course</Card.Title>
            <Card.Text>
            Some quick example text to build on the Course and make up the
             bulk of the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
            </Card.Body>
    </Card>
          </Col>
        </Row>
        </Container>
      </Container> */}
      <Container>
        <Row>
          { blog.map((v,i)=>{
            return(
            <ProductItems pitems={v} key={i}/>
            )
          }

          ) }
         
        </Row>
      </Container>
     <Footer/>
    </div>
  );
}

export default App;

function ProductItems({pitems}){
  return(
    <Col lg="3" className="mb-4"> 
    <Card >
            
            <Card.Body>
              <Card.Title>
                {pitems.title}
              </Card.Title>
             <Card.Text>
             {pitems.body}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
             
             </Card.Body>
     </Card>
    </Col>
  )
}