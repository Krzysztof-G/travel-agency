import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';


describe('Component TripSummary', () => {
  it('should generated link to correct address', () => {
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} tags={[]} />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedId}`);
  });
  it('check correct src and alt of image', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'photo';

    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]} />);

    expect(component.find('.img').prop('src')).toEqual(`/trip/${expectedSrc}`);
  });
});
