import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Employee from './Components/Functional';
import Student from './Components/ClassCompo';
import Eventhandle from './Components/HandleEvent';
import Form from './Components/Form.js';
import ContactList from './Components/ContactList.js';
import Header from './Components/Header.js';


import Content from './Components/content.js';












function App() {
  return (
    <div >
    
      
      
        {/*<ContactList contact={contacts}/>*/}
            {/*<Employee name='Monika'/>
            <Student name="Avi"/>
            <Eventhandle/>
             */}
      <Header/>

      <Router>
         <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">

                            
 
                            <img src={`${process.env.PUBLIC_URL}/assets/images/user2-160x160.jpg`} className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>Layout Options</span>
                                <span className="pull-right-container">
                                <span className="label label-primary pull-right">4</span>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                  
                                 <li><Link to={'/content'} ><i className="fa fa-circle-o"></i> Userinfo</Link></li>
                                <li><Link to={'/ContactList'} ><i className="fa fa-circle-o"></i> About</Link></li>
                                <li><Link to={'/form'} ><i className="fa fa-circle-o"></i> Contact</Link></li>
                               
                            </ul>
                        </li>
                        
                        
                        
                      
                    </ul>
                </section>
            </aside> 
            <Switch>
                <Route exact path='/content' component={ Content } />
              <Route exact path='/form' component={ Form } />
              <Route exact path='/contactList' component={ ContactList }  />
              
          </Switch>

             </Router>
        
    </div>
  );
}

export default App;
