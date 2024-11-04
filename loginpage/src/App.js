import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Container fluid >
      <Container>
        <Row>
          <Col className='text-center py-5 ' >
              <h1 className=' text-primary fw-bold '>Login Page</h1>
          </Col>
        </Row>

        <Row>
          <Col lg={4}>
          
              <form className='align-items-center'> 
                <div className='pb-3'>
                  <label className='form-label text-primary'>Username</label>
                  <input type='text' className='form-control ' name='username'/>

                </div>
                <div className='pb-3'>
                  <label className='form-label text-primary'>PassWord</label>
                  <input type='text' className='form-control ' name='password'/>
                  
                </div>
                <button className='btn btn-primary mb-3'> Login </button>
                <div>
                  <text>Don't have account?<text className='text-primary'> Register here</text></text>
                
                </div>
              </form>
              
          </Col>
        </Row>
      </Container>
    </Container>
    
    
  );
}

export default App;
