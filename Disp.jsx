import React from 'react'
import Pick from './Pick.jsx'

export default class Disp extends React.Component{
  
  constructor(props){
    super(props)
	this.state = {data:null}
  }
  
  componentDidMount() {
    let r = this.props.name.map(function(x){
	  return <h3>{x}</h3>
	});
	this.setState({data: r})
  }
  
  render() {    
    return <div>
	<div>{this.state.data}</div> <Pick choices={this.props.name}/> 
	</div>
  }
}