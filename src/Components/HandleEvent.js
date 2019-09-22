// import React from 'react';
import React , {Component} from 'react';
 

 // // handel event with function function
 /*function eventhandle(){
      function  Clickhandler(e){
            e.preventDefault();
            alert('click me');
        }
     return(<div>
          <button onClick={Clickhandler}>Click Me</button>
          </div>)
     }

 export default eventhandle;*/



 // handel event with class component

 class eventhandle  extends Component{
      constructor(props){
          super(props);
          this.state = {isToggleOn:true};
            // This binding is necessary to make `this` work in the callback
          this.handleClick = this.handleClick.bind(this);
          
      }
      handleClick(){
         this.setState(state=>({
             isToggleOn:!state.isToggleOn
         }));
      }
      render(){
          return(<button onClick={this.handleClick}>{this.state.isToggleOn ? 'OFF': 'ON'}</button>)
      }


 }
 export default eventhandle;