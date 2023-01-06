import { Component } from "react";


class Input extends Component{
    state={
        peso:'',
        altura:''
    }
    peso=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })  
      
    }
    altura=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }

    crear=(e)=>{
        e.preventDefault()
        if (this.state.peso===''||this.state.altura==='') {
            alert('ponga algo')
        }
        else{
           // console.log(this.state.peso,this.state.altura)
            this.props.nuevo(this.state.peso,this.state.altura)
        }
        

    }



    


    render(){return<form><input type={"number"}  onChange={this.peso} value={this.state.peso} name='peso' placeholder="En kilos"/>
    <input type={"number"} onChange={this.altura} name="altura" value={this.state.altura} placeholder='EN METROS'/>
    <br/>
    <button type="submit" onClick={this.crear}>Confirmar</button>
   
    </form>
    }

}

export default Input;
