import { Component } from "react";
import  Tabla from "./Tabla";

class Make extends Component{
    render(){
        return this.props.base.map(e=><Tabla  datos={e} key={null} borrar={this.props.borrar} correguir={this.props.correguir} />)
    }
}

export default Make;