import React from 'react'

class Pick extends React.Component{
  constructor(props){
    super(props)
	  this.state = {data:null}
    this.chosen = null;
  }
  
  handleClick(){    		  
    this.setState({data: this.props.choices[this.random()].name})    
  }

  random(){
    return Math.floor(Math.random() * this.props.choices.length)
  }
  
  render(){
    return <div><button onClick={this.handleClick.bind(this)}> Pick One </button> <div>Lcky pick is: <b>{this.state.data}</b></div> </div>
  }
}

export default Pick;