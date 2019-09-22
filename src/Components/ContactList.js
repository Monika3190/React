import React , {Component} from 'react';


export default class contactlist extends Component{
    constructor(){
        super();
       this.state={
contacts : [
 {
   "id": "karen",
   "name": "Karen Isgrigg",
   "designation":"Project Manager",
   "handle": "Monika",
   "src": "./assets/images/user2.jfif ",
 },
 {
   "id": "richard",
   "name": "Richard Kalehoff",
   "designation":"Product Analyst",
   "handle": "richardkalehoff",
  "src": "./assets/images/user2.jfif "
 },
 {
   "id": "tyler",
   "name": "Tyler McGinnis",
    "designation":"Sales Manager",
   "handle": "tylermcginnis",
  "src": "./assets/images/user2.jfif "
 }
],
        }
    }
    render(){
        console.log('props',this.props)
        return(
            <div>
                <ul className="Contact_List">
                   
                   {   this.state.contacts.map((cont)=>(
                        <li key={cont.id} >
                            
                            <div>
                                <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-header">
                                   <div style={{backgroundImage:`url(${cont.src})`}}>
                                </div>
                                    <strong className="mr-auto">{cont.designation}</strong>
                                    <small>11 mins ago</small>
                                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="toast-body">
                                    <p>{cont.name}</p>
                                      <p>{cont.handle}</p>
                                </div>
                                </div>
                     </div>
                            
                        </li>

                   ))}
                
                </ul>
        
            </div>)
    }
}