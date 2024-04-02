import RegisterTextInput from "@/Components/RegisterTextInput.jsx";

{/*
import { Link } from '@inertiajs/react';

const LoginOptions = () => {
    return (
        <div className="flex bg-gray-900 text-white p-8 pt-6 h-screen" style={{ backgroundColor: '#292F36' }}>
            <div className="relative w-2/3 ml-52" style={{ marginTop: '-4rem' }}>
                <div style={{ position: 'relative', width: '500px', height: '725px', flexShrink: 0, borderRadius: '0px 0px 100px 100px', border: '3px solid rgba(0, 0, 0, 0.00)', background: '#1E2127' }}></div>
            </div>
            <div className="absolute inset-0 flex justify-start items-center" style={{ marginLeft: '6rem', zIndex: '1' }}>
                <img src="/images/LoginOptionsImage.png" alt="LoginOptions" className="object-cover w-3/5 h-auto" style={{ marginTop: '-4rem' }}/> 
            </div>
            <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center mr-28" style={{ zIndex: '2' }}>
                <button className="w-72 h-12 rounded-full border-3 border-transparent bg-yellow-500 text-gray-900 py-2 px-4 mb-4">
                    <Link href="/login-landlord">Login as Landlord</Link>
                </button>
                <button className="w-72 h-12 rounded-full border-3 border-transparent bg-yellow-500 text-gray-900 py-2 px-4">
                    <Link href="/login-tenant">Login as Tenant</Link>
                </button>                
            </div>
            </div>
        </div>
    );
};

*/}

{/*
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import DashboardTenant from './DashboardTenant.jsx';
import DashboardLandloard from './DashboardLandloard.jsx';

function LoginOptions() {
  // Assuming you have some state to determine the user type (tenant or landlord)
  const [userType, setUserType] = useState(""); // "tenant" or "landlord"

  return (
    <Router>
      <Switch>
        <Route path="/dashboard-tenant">
          {userType === "tenant" ? <DashboardTenant /> : <Redirect to="/" />}
        </Route>
        <Route path="/dashboard-landlord">
          {userType === "landlord" ? <DashboardLandloard /> : <Redirect to="/" />}
        </Route>
          <Route exact path="/">


              <div className="flex bg-gray-900 text-white p-8 pt-6 h-screen" style={{backgroundColor: '#292F36'}}>
                  <div className="relative w-2/3 ml-52" style={{marginTop: '-4rem'}}>
                      <div style={{
                          position: 'relative',
                          width: '500px',
                          height: '725px',
                          flexShrink: 0,
                          borderRadius: '0px 0px 100px 100px',
                          border: '3px solid rgba(0, 0, 0, 0.00)',
                          background: '#1E2127'
                      }}></div>
                  </div>
                  <div className="absolute inset-0 flex justify-start items-center"
                       style={{marginLeft: '6rem', zIndex: '1'}}>
                      <img src="/images/LoginOptionsImage.png" alt="LoginOptions" className="object-cover w-3/5 h-auto"
                           style={{marginTop: '-4rem'}}/>
                  </div>
                  <div className="flex justify-center items-center">
                      <div className="flex flex-col justify-center items-center mr-28" style={{zIndex: '2'}}>
                          <button
                              className="w-72 h-12 rounded-full border-3 border-transparent bg-yellow-500 text-gray-900 py-2 px-4 mb-4">
                              <button onClick={() => setUserType("landlord")}>Login as Landlord</button>
                              {/*  <Link href="/login-landlord">Login as Landlord</Link>*/}
{/*
                          </button>
                          <button
                              className="w-72 h-12 rounded-full border-3 border-transparent bg-yellow-500 text-gray-900 py-2 px-4">
                              {/*   <Link href="/login-tenant">Login as Tenant</Link>  */}
                              {/*
                              <button onClick={() => setUserType("tenant")}>Login as Tenant</button>
                          </button>
                      </div>
                  </div>
              </div>

          </Route>
      </Switch>
    </Router>
  );
}


export default LoginOptions;
*/}



import React, { useState } from 'react';
import axios from 'axios';
import Button from "@/Components/RegisterButton.jsx";

import {Link} from "@inertiajs/inertia-react";

const LoginOptions = () => {
    const [userType, setUserType] = useState("");
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleLogin = (type) => {
        setUserType(type);
        setShowLoginForm(true);
    };

    const handleBack = () => {
        setShowLoginForm(false);
    };

    return (
        <div className="flex bg-gray-900 text-white p-8 pt-6 h-screen" style={{backgroundColor: '#292F36'}}>
            <div className="relative w-2/3 ml-52" style={{marginTop: '-4rem'}}>
                <div style={{
                    position: 'relative',
                    width: '500px',
                    height: '725px',
                    flexShrink: 0,
                    borderRadius: '0px 0px 100px 100px',
                    border: '3px solid rgba(0, 0, 0, 0.00)',
                    background: '#1E2127'
                }}></div>
            </div>
            <div className="absolute inset-0 flex justify-start items-center"
                 style={{marginLeft: '6rem', zIndex: '1'}}>
                <img src="/images/LoginOptionsImage.png" alt="LoginOptions" className="object-cover w-3/5 h-auto"
                     style={{marginTop: '-4rem'}}/>
            </div>

            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center mr-28" style={{zIndex: '2'}}>
                    {/* Show login form only if userType is selected */}
                    {showLoginForm ? (
                        <LoginForm userType={userType} onBack={handleBack} />

                    ) : (
                        <>
                            <button onClick={() => handleLogin("landlord")}
                                    className="w-72 h-12 rounded-full border-3 border-transparent bg-yellow-500 text-gray-900 py-2 px-4 mb-4">
                                Login as Landlord
                            </button>
                            <button onClick={() => handleLogin("tenant")}
                                    className="w-72 h-12 rounded-full border-3 border-transparent bg-yellow-500 text-gray-900 py-2 px-4">
                                Login as Tenant
                            </button>
                        </>
                    )}
                </div>
            </div>

        </div>
    );
};

const LoginForm = ({userType, onBack}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        // Perform login logic here based on userType
        console.log(`Logging in as ${userType} with email: ${email} and password: ${password}`);
        // Redirect to appropriate dashboard after login

        try {
            const response = await axios.post('/login', {
                email,
                password
            });

            console.log(response.data); // Handle successful login response
        } catch (error) {
            console.error('Login error:', error.response.data);
            // Handle login error (e.g., display error message to user)
        }
    };

    return (
        <div className="w-4/5 max-w-md ml-auto mr-20 mt-24 mb-20">
            <div>
                <h2 className=" w-4/5 text-yellow-500 text-3xl font-semibold mb-4 mr-44">Welcome Back to REALLA!</h2>
                <h2 className="text-2xl font-semibold mb-4">Login as {userType}</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        
                        <RegisterTextInput
                            id="email"
                            label="Your Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-6">

                        <RegisterTextInput
                            label="Password"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <Button type="submit">Login</Button>

                </form>
                <p className="mt-4">Don’t have an account? <Link href="/Auth/Register"
                                                                 className="text-yellow-500">Register</Link></p>
            </div>
            <button type="button" onClick={onBack}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Back
            </button>
        </div>


    );
};

export default LoginOptions;
