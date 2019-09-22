import React,{Component} from 'react';

export default class content extends Component{
    state={
        user:[
            {
                id:'mon',
                name:'Monika',
                lastname:'Uke',
                Designation:'Ui developer',
                src: "./assets/images/user2-160x160.jpg"
              },
             {
                  id:'amr',
                name:'Amar',
                lastname:'Patil',
                Designation:'Ux Designer',
                src: "./assets/images/user2-160x160.jpg"
            
            },
            {
                id:'mah',
                name:'Mahesh',
                lastname:'Powar',
                Designation:'Ux/Ui Developer',
                src: "./assets/images/user2-160x160.jpg"
            
            }
            
        ],
    }


handleDelete = itemId => {
     alert('Hello!');
    const user = this.state.user.filter(item => item.id !== itemId);
    this.setState({ user: user });
  };

//     removeContact=(users)=>{
//          alert('Hello!');
//        this.setState((currentState)=>({
//             user:currentState.user.filter((c)=>{
//                 return c.id !== users.id
//            })

//      }))
//  }

    render(){
       
        return( <div>
       
        
        <div className="content-wrapper">
              

                <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">User List</h3>
                                </div>
                                {this.state.user.map((userlist)=>(
                                <div className="box-footer" key={userlist.id}>
                                   
                                   
                                    <div className="row" >
                                        
                                        <div className="col-sm-3 col-xs-6">
                                          
                                            <div className="description-block border-right ">
                                                <div className="user-img-block" style={{backgroundImage:`url(${userlist.src})`}}></div>
                                              
                                            </div>
                                        </div> 

                                        <div className="col-sm-4 col-xs-6">
                                            <div className="description-block ">
                                                 
                                                <h5 className="description-header">{userlist.name}</h5>
                                                <div className="description-text">{userlist.lastname}</div>
                                                <div className="description-percentage text-green">{userlist.Designation}</div>
                                        </div>
                                        <button onClick={this.handleDelete}
          >Remove</button>
                                        </div>
                                        
                                    </div>
                                  
                                </div>
                                 ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
             </div>
            
            )
    }
}