import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    
    function loginApp(e){
        e.preventDefault();
        navigate('./Dashboard')
    }
    return (
        <section className="container d-flex justify-content-center align-items-center h-100">
            <img className='background-image w-100' src={require('../images/login_back.png')} alt='' />
            <div className="d-flex">               
                <div className='col-lg-12 '>
                    <div className='d-flex mt-5'>
                        <div className='p-4 w-100 mt-5'>
                            <h5 className='mb-5'>Login</h5>
                            <form onSubmit={loginApp}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className="mb-3 form-check d-flex">
                                    <div className='me-auto'>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                    </div>
                                                                      
                                </div>

                                <button type="submit" className="btn btn-primary d-block w-100">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;