import React, { useEffect, useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';



const UseEffectAPI = () => {
    const [users, setUsers] = useState({
        data: [],
    })


    const loadUsers = async () => {
        console.log("before");
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        //whatever data has come in json it will get printed by calling
        setUsers(jsonresponse)  
    };

    
    // useEffect(() => {
    //     loadUsers();
    //  }, []);

    

    return (
        
        <div>
           
            <header className="p-2 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-8">UncoverTech |</a></li>
                        </ul>

                        <div className="text-end">
                            <button type="button" class="btn btn-warning rounded-pill mt-1" onClick={loadUsers}>Get Users</button>
                        </div>
                    </div>
                </div>
            </header>

            {/* <h6 className="animate">Click on button to get users!!!</h6>  */}
            
            <div className="main">
                <h4 className="animate">click the button to get user's info!!</h4>
            </div>

            <div className="showDataStyle">
                { 
                    users.data.map((curElem) => {
                        return (
                            <div className=" mt-5 cardcontainer d-flex justify-content-center">
                                <div className="cardm d-flex">
                                    <div className="cards">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={curElem.avatar} className="rounded-circle m-3" width="150" height="150" alt="user'simage" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <p className="card-title mx-5">User id: {curElem.id}</p>
                                                    <p className="textcard1"><small><AccountCircleIcon /> {curElem.first_name}   {curElem.last_name}</small></p>
                                                    <p className="textcard2"><MailOutlineIcon /> <a href="#">{curElem.email}</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })


                }
            </div>

            

        </div>

      

    );
    
};


export default UseEffectAPI;