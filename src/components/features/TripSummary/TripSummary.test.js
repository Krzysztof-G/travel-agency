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
    const expectedDays = 7;
    const expectedCost = '100$';


    const component = shallow(<TripSummary name={expectedName} days={expectedDays} cost={expectedCost} tags={[]} />);

    const renderedName = component.find('.title').text();
    expect(renderedName).toEqual(expectedName);
    const renderDays = component.find('.details span').first().text();
    expect(renderDays).toEqual(`${expectedDays} days`);
    const renderCost = component.find('.details span').last().text();
    expect(renderCost).toEqual(`from ${expectedCost}`);
  });

  it('should throw error without any props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('render correct tags', () => {
    const expectedTagOne = 'aaa';
    const expectedTagTwo = 'bbb';
    const expectedTagThree = 'ccc';
    const component = shallow(<TripSummary tags={[expectedTagOne, expectedTagTwo, expectedTagThree]}/>);

    expect(component.find('.tags span').at(0).text()).toEqual(expectedTagOne);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTagTwo);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTagThree);
  });


});
