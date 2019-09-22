import React , {Component} from 'react';

export default class form extends Component{
    constructor(props){
        super(props);
        this.state = {  value:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleDescrChange = this.handleDescrChange.bind(this);
        this.SubmitForm = this.SubmitForm.bind(this);
    }

    handleChange(e){
        this.setState({value:e.target.value.toUpperCase()});
         console.log("Usename", e.target.value);

    }
     handleDescrChange(e){
        this.setState({value:e.target.value});
        console.log("Description", e.target.value);

    }
    SubmitForm(e){
        alert('An essay was submitted: ' + this.state.value);
        e.preventDefault();
    }
    render(){
        return(
        <div className="content-wrapper">
                <section className="content-header">
        
        <div className="row">

                    <div className="col-md-6">
                     
          <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">User Information</h3>
            </div>
           
            <form class="form-horizontal" onSubmit={this.SubmitForm}>
              <div class="box-body">
                <div class="form-group">
                  <label for="inputEmail3" class="col-sm-2 control-label">Name</label>

                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="Name"   onChange={this.handleChange} placeholder="Email"/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword3" class="col-sm-2 control-label">Last Name</label>

                  <div class="col-sm-10">
                    <input type="text" name="Desc"   onChange={this.handleDescrChange} class="form-control" id="inputPassword3" placeholder="Password"/>
                  </div>
                </div>

                
              </div>
             
              <div class="box-footer">
                <button type="submit" class="btn btn-default">Cancel</button>
                
                  <input type="submit" value="Submit"  class="btn btn-info pull-right"/>
              </div>
             
            </form>
          </div>
          
		  


                    </div>


         
        
        </div>
        </section>
        </div>
        
        );
    }
}


