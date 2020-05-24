import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import propTypes from 'prop-types';

class OrderOptionDate extends React.Component {
  static propTypes = {
    currentValue: propTypes.any,
    setOptionValue: propTypes.func,
  };

  render() {
    const { setOptionValue, currentValue } = this.props;

    return (
      <div>
        <DatePicker selected={currentValue} onChange={setOptionValue} />
      </div>
    );
  }
}

export default OrderOptionDate;
