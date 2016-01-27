import React, { Component, PropTypes }     from 'react'
import ReactDom                            from 'react-dom'
import TableBody                           from './TableBody'
import HeaderMonth                         from './HeaderMonth'
import HeaderButtonRow                     from './HeaderButtonRow'
import HeaderWeekDaysRow                   from './HeaderWeekDaysRow'
import { data }                            from '../../data.json'
import { Provider, connect }               from 'react-redux'
import { createStore, bindActionCreators } from 'redux'
import configureStore                      from '../stores/configureStore'
import * as CalendarActions                from './../actions/Actions'


class Calendar extends Component {


	render(){

		let {daysOfWeek, monthHeader, weeks, weekOffset} = this.props

		return(
			<table>
				<thead>
					<HeaderButtonRow monthHeader={monthHeader} incrementWeekoffset={CalendarActions.incrementWeekoffset} weekOffset={weekOffset} />
					<HeaderWeekDaysRow daysOfWeek={daysOfWeek} />
				</thead>
				<TableBody weeks={weeks} />
			</table>
		)

	}


}

Calendar.propTypes = {
	data        : PropTypes.array,
	weeks       : PropTypes.number,
	weekOffset  : PropTypes.number,
	monthHeader : PropTypes.string
}

Calendar.defaultProps = {
	data        : [],
	daysOfWeek  : ["S", "M", "T", "W", "T", "F", "S"],
	weeks       : 4,
	weekOffset  : 0,
	monthHeader : HeaderMonth()
}

function mapStateToProps(state){
	return {
		daysOfWeek  : state.daysOfWeek,
		weeks       : state.weeks,
		weekOffset  : state.weekOffset,
		monthHeader : state.monthHeader
	}
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(CalendarActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Calendar)




const store = configureStore()
ReactDom.render(<Provider store={store}><Calendar data={data}/></Provider>, document.getElementById('mount'))
