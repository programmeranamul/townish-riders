import { Col, Container, Row } from "react-bootstrap";

<div>
                    <Container style={{marginTop: '50px'}}>
                    <Row>
                        <Col></Col>
                        <Col className="form">
                            <h3 style={{textAlign:'center',color:'red',fontWeight:'700'}}>Login</h3>                    
                            <For onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control name="email" onBlur={handleBlur} style={{border:'none', borderBottom:'1px solid gray'}} type="email" placeholder="Username or Email" required />
                            </Form.Group>
        
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control name="password" onBlur={handleBlur} style={{border:'none', borderBottom:'1px solid gray'}} type="password" placeholder="Password" required />
                            </Form.Group>
        
                            <button style={{width: '100%'}} className="logIn-Btn" variant="primary" type="submit">Login</button>
        
                            <Form.Group style={{marginTop:'5px', textAlign:'center'}}>
                                <p>Don't have account? <Link to="/signup" style={{color:'#F9A51A'}}>Create an Account</Link></p>
                            </Form.Group>
                            </For>
        
                         <p style={{marginTop:'-13px'}} className='text-center'>or</p>
                               
                            <div className="loginSign">
                                        <button onClick={fbSignIn}><img src={facebook} alt=""/> Continue with Facebook</button>
                                        <button onClick={googleSignIn}><img src={google} alt=""/> Continue with Google</button>
                            </div>
        
                            <p style={{color: 'red', textAlign:'center'}}>{user.error}</p>
                            {user.success && <p style={{color: 'green', textAlign:'center'}}>Logged In successfully!</p>}
                        </Col>
                        <Col></Col>
                    </Row>
                    </Container>
                </div>