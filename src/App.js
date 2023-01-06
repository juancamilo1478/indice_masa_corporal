import { Component } from 'react';
import './App.css';
//.................datos......................
import datos from './datos/datos.json';
import Input from './componentes/Input';
import Make from './componentes/Make';
//.....................components.................
class App extends Component{
state={
  datos:datos
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
    else{
      alert("parale tilin")
    }
  }
// borrar tabla base de datos.....................
borrar=(idBorrar)=>{
  const nuevo=this.state.datos.filter(dato =>dato.id  !== idBorrar)
  console.log(nuevo)
  var nuevoC=[]
  for(var i=0;i<nuevo.length;i++)
  {
    var datoD={
         id:i,
         fecha:nuevo[i].fecha,
         peso:nuevo[i].peso,
         altura:nuevo[i].altura,
         estado:nuevo[i].estado
      }
      nuevoC.push(datoD)
  }
  console.log(nuevoC)
 this.setState({
    datos:[...nuevoC]
  })
}
//..................input creador de tabla .....................
render(){return<div className='tabla'>
  <header className='header'><h1 className='h1'>Indice de masa corporal</h1></header>
  <nav className='nav'></nav>
  <main className='main'>
    <div className='section'>
    <Make base={this.state.datos} borrar={this.borrar} correguir={this.corregir}/>
    </div>
    <aside className='aside'>
    <Input nuevo={this.addTabla}/>
    </aside>
  </main>
  
</div>
}

}



export default App;
