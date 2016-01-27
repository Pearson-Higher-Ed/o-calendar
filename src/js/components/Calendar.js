import React, { Component, PropTypes }     from 'react'
import TableBody                           from './TableBody'
import HeaderMonth                         from './HeaderMonth'
import HeaderButtonRow                     from './HeaderButtonRow'
import HeaderWeekDaysRow                   from './HeaderWeekDaysRow'



class Calendar extends Component {


	render(){

		let {daysOfWeek, monthHeader, weeks, weekOffset, incrementWeekoffset, decrementWeekOffset, resetWeekOffset } = this.props
		
		return(
			<table>
				<thead>
					<HeaderButtonRow {...this.props} />
					<HeaderWeekDaysRow daysOfWeek={daysOfWeek} />
				</thead>
				<TableBody weeks={weeks} />
			</table>
		)

	}


}




Calendar.propTypes = {
	data                : PropTypes.array,
	weeks               : PropTypes.number,
	weekOffset          : PropTypes.number,
	monthHeader         : PropTypes.string
}

Calendar.defaultProps = {
	data                : [],
	daysOfWeek          : ["S", "M", "T", "W", "T", "F", "S"],
	weeks               : 4,
	weekOffset          : 0,
	monthHeader         : HeaderMonth()
}



export default Calendar
