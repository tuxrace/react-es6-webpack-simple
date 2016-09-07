import React from 'react';
import ReactDOM from 'react-dom';
import Disp from './Components/Disp.jsx'

class App extends React.Component{
  render(){
    var data = ['Aida','Lorna','Fe'];
    return <div> 
	<Disp name={mix}/>	
	</div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);