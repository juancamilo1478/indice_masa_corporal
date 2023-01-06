import { Component } from "react";
import Img from "./img/Img";

class Tabla extends Component{
    state={
        imc:this.props.datos.peso/(this.props.datos.altura*this.props.datos.altura)
    }
    borrar=()=>{
        this.props.borrar(this.props.datos.id)
        
    }
    

    render(){return<div className="espacio"><div className="cuadro"><h1 className="x"  onClick={this.borrar}  >x</h1>
    <p>Altura:{this.props.datos.altura} m</p>
    <p>Peso:{this.props.datos.peso} kg</p>
    <p>Imc:{this.state.imc.toFixed(2)} </p>
    <Img imc={this.state.imc} dato={this.state.imc.toFixed(2)} />
    </div>
    </div>
    }
}


export default Tabla;