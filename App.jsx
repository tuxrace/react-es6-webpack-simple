import React from 'react';
import ReactDOM from 'react-dom';
import Disp from './Components/Disp.jsx'

class App extends React.Component{
  render(){
    let data = [{name:'Aida'},{name:'Lorna'},{name:'Fe'}];
    return <div> 
	<Disp name={data}/>	
	</div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);