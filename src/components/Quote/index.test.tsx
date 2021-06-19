import {render, screen} from '@testing-library/react';
import Quote from './index';

describe('Renders quote', () => {
  /**
   * Verify that a quote is rendered
   */
  test('Has children', () => {
    render(<Quote>Text goes here</Quote>);

    const received = screen.getByText('Text goes here');

    expect(received).toBeInTheDocument();
  });

  /**
   * Verify that a quote with a source is rendered
   */
  test('Has list', () => {
    render(<Quote source="Simon">Text goes here</Quote>);

    const receivedQuote   = screen.getByText('Text goes here');
    const receivedSource   = screen.getByText('Simon');

    expect(receivedQuote).toBeInTheDocument();
    expect(receivedSource).toBeInTheDocument();
  });
});
