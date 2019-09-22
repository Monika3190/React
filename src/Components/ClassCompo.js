import React , {Component} from 'react';

// class component with props 
/*class student extends Component {
    render (){
        return(<div>
            Hi {this.props.name}
        </div>)
    }
}*/

// class components with state,  replace props with state 
class student extends Component {
    // define  with constructor
    constructor(props){
        super(props);
        this.state={name:'Abhishek'}
    }
    username(){
        this.setState({name:'Monika Ishwar Uke'})
    }
    render (){
        // define without contructor
        
       // this.state={roll:'101'}
        return(<div>
            Hi {this.state.name }
            
        </div>)
    }
}



export default student;