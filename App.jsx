import React from 'react';
import ReactDOM from 'react-dom';
import Disp from './Disp.jsx'

class App extends React.Component{
  render(){
    var data = ['Aida','Lorna','Fe'];
    return <div> 
	<Disp name={data}/> 	
	</div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);