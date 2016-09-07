import React from 'react';
import ReactDOM from 'react-dom';
import Disp from './Components/Disp.jsx'

class App extends React.Component{
  render(){
    var data = ['Aida','Lorna','Fe'];
    return <div> 
	<Disp name={data}/> <h3><h3 />	
	</div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);