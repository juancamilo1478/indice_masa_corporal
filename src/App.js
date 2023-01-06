import { Component } from 'react';
import './App.css';
//.................datos......................
import datos from './datos/datos.json';
import datos2 from './datos/datos2.json';
import Input from './componentes/Input';
import Make from './componentes/Make';
import imagen from './componentes/img/pesos.png';

//.....................components.................
class App extends Component{
state={
  datos:datos,
  datos2:datos2
}
//.....agregar dato....................
addTabla=(peso,estatura)=>{
  //agregando datos a una tabla nueva

  if (this.state.datos.length<6) {
    const nuevaTabla={
      id:this.state.datos.length,
      fecha:".....",
      peso:peso,
      altura:estatura,
      estado:true
    }
     //.........agregar tabla a la base de datos 
    this.setState({ 
      datos:[...this.state.datos, nuevaTabla]}
    ) 
  }
  else if(this.state.datos.length>5 &&this.state.datos2.length<6)
  {
    const nuevaTabla={
      id:this.state.datos2.length,
      fecha:".....",
      peso:peso,
      altura:estatura,
      estado:true
    }
     //.........agregar tabla a la base de datos 
    this.setState({ 
      datos2:[...this.state.datos2, nuevaTabla]}
    ) 
  }
    else{
      alert("parale tilin")
    }
  }
// borrar tabla base de datos.....................
borrar=(idBorrar)=>{
console.log(idBorrar)
var nuevo=[]
for(var i=0; i<this.state.datos.length;i++)
{
  if (this.state.datos[i].id !==idBorrar) {
    nuevo.push(this.state.datos[i])
  }
}



  this.setState({
        datos:[...nuevo]
      })
}




//..................input creador de tabla .....................
render(){return<div className='tabla'>
  <header className='header'><h1 className='h1'>Indice de masa corporal</h1></header>
  <nav className='nav'></nav>
  <main className='main'>
    
    <div className='section'>
      <div className='parte1'>
    <Make base={this.state.datos} borrar={this.borrar} correguir={this.corregir} />
    </div>
    <div className='parte1'>
    <Make base={this.state.datos2} borrar={this.borrar} correguir={this.corregir}/>
    </div>
    </div>

    <aside className='aside'>
    <Input nuevo={this.addTabla}/>
    </aside>
  </main>
  <nav className='nav'></nav>
  <footer className='footer'>
    <img src={imagen} alt="tabla de pesos" className='tablaP'/>
    </footer>
  
</div>
}

}



export default App;
