import React, { Component, PropTypes } from 'react'
import ReactDom                        from 'react-dom'
import TableBody                       from './TableBody'
import HeaderMonth                     from './HeaderMonth'
import HeaderButtonRow                 from './HeaderButtonRow'
import HeaderWeekDaysRow               from './HeaderWeekDaysRow'
import { data }                        from '../../data.json'
import { Provider, connect }           from 'react-redux'
import { createStore }                 from 'redux'
import configureStore                  from '../stores/configureStore'
import { bindActionCreators }          from 'redux'
import * as CalendarActions            from './../actions/Actions'



class Calendar extends Component {

	constructor(props) {
		console.log("***********Calendar Constsructor**************")
		super(props)

		this.state = {
			daysOfWeek  : ["S", "M", "T", "W", "T", "F", "S"],
			weeks       : 4,
			weekOffset  : 0,
			monthHeader : HeaderMonth()
		}

	}


	render(){

		let {daysOfWeek, monthHeader, weeks, weekOffset} = this.state

		return(
			<table>
				<thead>
					<HeaderButtonRow monthHeader={monthHeader}  weekOffset={weekOffset} />
					<HeaderWeekDaysRow daysOfWeek={daysOfWeek} />
				</thead>
				<TableBody weeks={weeks} />
			</table>
		)

	}


}

Calendar.propTypes = {
	data  : PropTypes.array
}

Calendar.defaultProps = {
	data  : []
}

function mapStateToProps(state){
	return state
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(CalendarActions, dispatch)
}

let store = createStore(configureStore)
export default connect(mapStateToProps, mapDispatchToProps)(Calendar)




ReactDom.render(<Provider store={store}><Calendar data={data}/></Provider>, document.getElementById('mount'))
