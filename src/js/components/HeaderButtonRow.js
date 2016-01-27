import React, { Component, PropTypes } from 'react'
import {incrementWeekoffset, resetWeekOffset, decrementWeekOffset } from './../actions/Actions'


class HeaderButtonRow extends Component{


//   handleButtonClick(e){
//     e.preventDefault()
//
//     let { weekOffset } = this.props
//
//     console.log(Object.keys(this.props))
//     console.log("ping "+e.target.id)
//
//   	switch(e.target.id){
//   		case 'leftButton':
//   			incrementWeekoffset(weekOffset)
//   			break;
//   		case 'centerButton':
//   			resetWeekOffset(weekOffset)
//   			break;
//   		case 'rightButton':
//   			decrementWeekOffset(weekOffset)
//   			break;
//   	}
//
//
// }


render(){
console.log(this.props)
  let { monthHeader, dispatch, weekOffset, incrementWeekoffset } = this.props

  return(
    <tr>
      <th className='headerTitle' colSpan='4'>{monthHeader}</th>
      <th colSpan='3'>
        <div className='buttonWrapper'>
          <div className='button' id='leftButton'   tabIndex='1' onClick={() => incrementWeekoffset()}>&#10094;</div>
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
  weekOffset : PropTypes.number.isRequired,
  incrementWeekoffset:PropTypes.func.isRequired
}



export default HeaderButtonRow
