import { Component } from "react";
import ob_mor from './1.png';
import ob from './2.png';
import sobre from './3.png';
import norb from './4.png';
import p_insu from './5.png';

function estadoFoto(e) {  
        if(e<18.6){
            return <img className="i" src={p_insu} alt="imagen gordoberancia"/>
        }
        else if(e>18.5 && e<25){
            return <img className="i" src={norb} alt="imagen gordoberancia"/>
        }
        else if(e>24.9 && e<30)
        {
            return <img className="i" src={sobre} alt="imagen gordoberancia"/>
        }

        else if(e>29.9 && e<35)
        {
            return <img className="i" src={ob} alt="imagen gordoberancia"/>
        }
         else if(e>34.9)
         {
            return<img className="i" src={ob_mor} alt="imagen gordoberancia"/>
         }     
}

class Img extends Component{  
   render(){return(<div >{estadoFoto(this.props.dato)}</div>

   );
   }
   }
export default Img;