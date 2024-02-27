import React from 'react';
import { screen } from '@testing-library/react';
import { renderCustom } from 'utils/renderCustom';
import Theme from 'styles/Theme';
import { SubHeader } from './SubHeader';

describe('SubHeader component', () => {
  test('renders without crashing', () => {
    renderCustom(<SubHeader dark={false} />);
  });

  test('renders without crashing', () => {
    renderCustom(<SubHeader dark={false} />);
  });

  test('applies dark theme correctly', () => {
    const color = Theme.palette.color.gray?.light;
    renderCustom(<SubHeader dark />);
    expect(screen.getByTestId('title_test_token')).toHaveStyle(
      `color: ${color}`
    );
    expect(screen.getByTestId('title_test_change')).toHaveStyle(
      `color: ${color}`
    );
    expect(screen.getByTestId('title_test_volume')).toHaveStyle(
      `color: ${color}`
    );
    expect(screen.getByTestId('title_test_market')).toHaveStyle(
      `color: ${color}`
    );
  });

  test('displays logo and title correctly', () => {
    renderCustom(<SubHeader dark={false} />);
    expect(screen.getByAltText('Logo SnowDEX')).toBeInTheDocument();
    expect(screen.getByText('SDEX/AVAX')).toBeInTheDocument();
  });

  test('displays token info correctly', () => {
    renderCustom(<SubHeader dark={false} />);
    const tokenPrice = screen.getByText('$1.00');
    const change24h = screen.getByText('+1.38%');
    const volume24h = screen.getByText('$587,235.00');
    const marketCap = screen.getByText('$40,000,000.00');
    expect(tokenPrice).toBeInTheDocument();
    expect(change24h).toBeInTheDocument();
    expect(volume24h).toBeInTheDocument();
    expect(marketCap).toBeInTheDocument();
  });

  test('displays images correctly', () => {
    renderCustom(<SubHeader dark={false} />);
    expect(screen.getByAltText('Logo SnowDEX')).toBeInTheDocument();
  });
});
