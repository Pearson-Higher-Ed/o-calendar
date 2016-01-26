import React, { Component, PropTypes } from 'react'
import { connect }                     from 'react-redux'
import {incrementWeekoffset, resetWeekOffset, decrementWeekOffset } from './../actions/Actions'


class HeaderButtonRow extends Component{

  constructor(props){
    super(props)

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }


  handleButtonClick(e){
    e.preventDefault()

    let { weekOffset, dispatch } = this.props

    console.log(this.props)
    console.log("ping "+e.target.id)

  	switch(e.target.id){
  		case 'leftButton':
  			dispatch(incrementWeekoffset(weekOffset))
  			console.log(weekOffset)
  			break;
  		case 'centerButton':
  			dispatch(resetWeekOffset(weekOffset))
  			console.log(weekOffset)
  			break;
  		case 'rightButton':
  			dispatch(decrementWeekOffset(weekOffset))
  			console.log(weekOffset)
  			break;
  	}


}


render(){
console.log(this.props)
  let { monthHeader, dispatch, weekOffset } = this.props

  return(
    <tr>
      <th className='headerTitle' colSpan='4'>{monthHeader}</th>
      <th colSpan='3'>
        <div className='buttonWrapper'>
          <div className='button' id='leftButton'   tabIndex='1' onClick={(e) => this.handleButtonClick(e)}>&#10094;</div>
          <div className='button' id='rightButton'  tabIndex='3' onClick={(e) => this.handleButtonClick(e)}>&#10095;</div>
          <div className='button' id='centerButton' tabIndex='2' onClick={(e) => this.handleButtonClick(e)}>today</div>
        </div>
      </th>
    </tr>
  )
}



}

HeaderButtonRow.propTypes = {
  monthHeader: PropTypes.string.isRequired,
  weekOffset : PropTypes.number.isRequired
}


function mapStateToProps(state){
  return state
}



export default connect(mapStateToProps)(HeaderButtonRow)
