import logo from './logo.svg';
import './App.css';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

function App() {
  let [formData,setFormData]=useState(
    {
        uname:'',
        uemail:'',
        uphone:'',
        umessage:'',
        index:''
    }
)
 let [userData,setUserData]=useState([])
  

 let getValue=(event)=>{
   let oldData={...formData}
   let inputName=event.target.name
   let inputValue =event.target.value
   oldData[inputName] = inputValue
   setFormData(oldData)
  
   
 }

 let handelSubmit=(event)=>{
  
  let currentUserFormData={
    uname:formData.uname,
    uemail:formData.uemail,
    uphone:formData.uphone,
    umessage:formData.umessage
    
  }
   if(formData.index===""){

    toast.success("Data Added Succesfully")
  let checkFilterUser=userData.filter((v)=>v.uemail==formData.uemail || v.uphone==formData.uphone)
  
    if(checkFilterUser.length==1){
      toast.error("Email or Phone already exists...")
    }
    else{
  
  let oldUserData =[...userData,currentUserFormData]

  setUserData(oldUserData)
  setFormData(
    {
      uname:'',
      uemail:'',
      uphone:'',
      umessage:'',
      index:''
  }

   )
  }
}
else{
  let editIndex=formData.i;
  let oldData=userData;
  
  let checkFilterUser=userData.filter((v,index)=>(v.uemail==formData.uemail || v.uphone==formData.uphone) && index==editIndex)

  if(checkFilterUser.length==0){
    toast.success("Data Updated Succesfully")
    
  oldData[editIndex]['uname']=formData.uname
  oldData[editIndex]['uemail']=formData.uemail
  oldData[editIndex]['uphone']=formData.uphone
  oldData[editIndex]['umessage']=formData.umessage
  
  setUserData(oldData)
  // console.log(formData.i)

  setFormData(
    {
      uname:'',
      uemail:'',
      uphone:'',
      umessage:'',
      index:''
      
  })
}else{

  toast.error("Email or Phone already exists...")
}

}
   event.preventDefault();
 }

 let deletRow=(index)=>{
  let filterDataFormDelete=userData.filter((v,i)=> i!=index)  
   setUserData(filterDataFormDelete)
   toast.success("succfully delete one data")

}

let editRow=(index)=>{

  
  let editData=userData.filter((v,i)=>i==index)[0]
  editData['i']=index;
  setFormData(editData)
}

  return (
    <Container fluid>
      <ToastContainer/>
       <Container>
          <Row>
            <Col className='text-center py-5'>
              <h1> Enquiry Now</h1>
            </Col>
          </Row>
          <Row>
              <Col lg={5}>
                
                <form>
                  <div className='pb-3'>
                  <label className='form-label'>Name </label>
                  <input type='text' onChange={getValue}  value={formData.uname}  name='uname'className='form-control'></input>
                  </div>
                  <div className='pb-3'>
                  <label className='form-label'>Email </label>
                  <input type='email' onChange={getValue} value={formData.uemail} name='uemail'className='form-control'></input>
                  </div>
                  <div className='pb-3'>
                      <label className='form-lable'>Phone</label>
                      <input type='text'name='uphone' onChange={getValue} value={formData.uphone} className='form-control'></input>
                  </div>
                  <div className='mb-3'>
                    <label  className='form-label'>Message</label>
                    <textarea className='form-control' onChange={getValue} value={formData.umessage} name='umessage' id='' rows='3'></textarea>
                  </div>
                  <button   onClick={handelSubmit} className='btn btn-primary'>
                    {
                      formData.index!=="" ? 'Update' : 'Save'
                    }
                    </button>
                </form>
              </Col>
              <Col lg={7}>
                          <Table striped bordered hover>
                                <thead>
                                  <tr>
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Message</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  { userData.length>=1 ? 

                                     userData.map((obj,i)=>{
                                      return(
                                      <tr key={i}>
                                          <td>{i+1}</td>
                                          <td>{obj.uname}</td>
                                          <td>{obj.uemail}</td>
                                          <td>{obj.uphone}</td>
                                          <th>{obj.umessage}</th>
                                          <th>
                                                <button onClick={()=>deletRow(i)}>delete</button>
                                              <button onClick={()=>editRow(i)}>Update</button>
                                          </th>
                                        </tr>
                                      )
                                     })

                                     :
                                        <tr>
                                          <td colSpan={6}>No data Found</td>
                                        </tr>
                                      }
                              
                                </tbody>
                             </Table>
              
              </Col>
          </Row>
       </Container>
    </Container>
  );
}

export default App;
