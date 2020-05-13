import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

const OrderForm = ({tripCost, options}) => {

  const OptionPrice = pricing.map(option =>
    (<Col md={4} key={option.id}>
      <OrderOption {...option}>
      </OrderOption>
    </Col>)
  );

  return (
    <Row>
      {OptionPrice}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options}>

        </OrderSummary>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;

