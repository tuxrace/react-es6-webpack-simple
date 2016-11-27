import React from 'react'
import Pick from './Pick.jsx'

export default class Disp extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {data:null}
  }
  
  componentDidMount() {
    const { name } = this.props;
    let r = name.map((x,i) => (<li key={i}>{x.name}</li>)  );    
    this.setState({data: r})
  }  
  
  render() {    
    const { name } = this.props;
    return <div>
	<div>{this.state.data}</div> <Pick choices={name}/> 
	</div>
  }
}