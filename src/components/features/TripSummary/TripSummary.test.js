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
    const expectedAlt = 'description';

    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]} />);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });
  it('render correct name, days, cost', () => {
    const expectedName = 'Lorem ipsum ';


    const component = shallow(<TripSummary name={expectedName} tags={[]} />);

    const renderedName = component.find('.title').text();
    expect(renderedName).toEqual(expectedName);

  });

});
