import React from 'react'

class Pick extends React.Component{
  constructor(props){
    super(props)
	  this.state = {data:null}
    this.chosen = null;
  }
  
  handleClick = () => {
    const random = () => (Math.floor(Math.random() * this.props.choices.length - 1))    		  
    this.setState({data: this.props.choices[random()].name})    
  }  
  
  render(){    
    return <div><button onClick={this.handleClick}> Pick One </button> <div>Lcky pick is: <b>{this.state.data}</b></div> </div>
  }
}

export default Pick;