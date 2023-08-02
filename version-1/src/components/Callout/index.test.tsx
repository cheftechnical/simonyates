import {render, screen} from '@testing-library/react';
import Callout from './index';

describe('variant="default"', () => {
  /**
   * Use the children prototype, and verify that the child content is rendered
   */
  test('Has children', () => {
    render(<Callout>Text goes here</Callout>);
    const received = screen.getByText('Text goes here');
    expect(received).toBeInTheDocument();
  });

  /**
   * Use the list prototype, and verify that each element of the array is rendered
   */
  test('Has list', () => {
    render(<Callout list={['lorem', 'ipsum', 'dolor', 'sit', 'amet']}/>);
    const receivedLorem   = screen.getByText(/lorem/);
    const receivedIpsum   = screen.getByText(/ipsum/);
    const receivedDolor   = screen.getByText(/dolor/);
    const receivedSit     = screen.getByText(/sit/);
    const receivedAmet    = screen.getByText(/amet/);

    expect(receivedLorem).toBeInTheDocument();
    expect(receivedIpsum).toBeInTheDocument();
    expect(receivedDolor).toBeInTheDocument();
    expect(receivedSit).toBeInTheDocument();
    expect(receivedAmet).toBeInTheDocument();
  });
});
