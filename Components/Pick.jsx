import React from 'react'

class Pick extends React.Component{
  constructor(props){
    super(props)
	  this.state = {data:null}
  }
  
  handleClick (){
    let c = Math.floor(Math.random() * this.props.choices.length)	
	  console.log(this.props.choices[c])
    this.setState({data: this.props.choices[c].name})
  }
  
  render(){
    return <div><button onClick={this.handleClick.bind(this)}> Pick One </button> <div>{this.state.data}</div> </div>
  }
}

export default Pick;