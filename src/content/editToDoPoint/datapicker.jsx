import React from "react";
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocaliser from 'react-widgets-moment'
import 'react-widgets/dist/css/react-widgets.css'

momentLocaliser(moment)
const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
    <DateTimePicker
        onChange={onChange}
        format="DD MMM YYYY"
        time={showTime}
        value={!value ? null : new Date(value)}
    />
    export default renderDateTimePicker;