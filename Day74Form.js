import React from "react";
class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            isClicked: false,
            FN:'',
            rollNo:''
        }
    }
    handleclick=()=>{
        this.setState({isClicked:true});
    }
    handlenamechange=(event)=>{
        this.setState({FN:event.target.value})
    }
    handlenumberchange=(event)=>{
        this.setState({rollNo:event.target.value})
    }
    handlesubmit=(event)=>{
        // event.preventDefault();
        alert('Form Submitted succesfully...')
    }
    render() {
        
        if (!this.state.isClicked) {
            return (
                <div style={{justifyContent:"center",alignItems:"center", textAlign: 'center', backgroundColor: '#5dd748', width:500, left:500}}>
                    <h3>MERN stack developer</h3>
                    <button onClick={this.handleclick}>Apply</button>
                </div>
            )
        } else {
            return (
                <div>
                    <form onSubmit={this.handlesubmit}>
                    <div style={{ textAlign: 'center', backgroundColor: '#5dd748', width:500 }}>
                        <h2>MERN Stack developer</h2>
                        <span>Name  </span>
                        <input type='text' onChange={this.handlenamechange}/>
                        <br/>
                        <br/>
                        <span>Roll No  </span>
                        <input type='text' onChange={this.handlenumberchange}/>
                        <br/>
                        <br/>
                        <input type ='submit' value='Submit Now'/>
                        </div>
                    </form>
                </div>
            )
        }

    }
}
export default Form;