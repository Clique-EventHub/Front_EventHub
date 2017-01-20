import React from 'react';
import { DateRangePicker } from 'react-dates';

class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    if(startDate) this.props.onDateStart(startDate.format());
    if(endDate) this.props.onDateEnd(endDate.format());
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    return (
        <div>
            <DateRangePicker
              {...this.props}
              id={this.props.id}
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
              focusedInput={focusedInput}
              startDate={startDate}
              endDate={endDate}
              isOutsideRanges={() => false}
              enableOutsideDays={true}
            />
        </div>
    );
  }
}

export default class DatePicker extends React.Component {

    constructor(props) {
        super(props);
        //DateRangePicker
    }

    render() {

        return (
            <DateRangePickerWrapper numberOfMonths={1} showClearDates id={this.props.id} onDateStart={this.props.onDateStart} onDateEnd={this.props.onDateEnd} />
        );
    }
}
