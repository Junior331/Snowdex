import { renderCustom } from 'utils/renderCustom';
import { fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import icons from 'assets/img/Icon';
import Navigation from './Navigation';

describe('Navigation component', () => {
  const links = [
    { text: 'Home', router: '/', icon: icons.globe },
    { text: 'About', router: '/about', icon: icons.globe }
  ];
  test('renders with without crashing', () => {
    renderCustom(
      <MemoryRouter>
        <Navigation isDark Links={links} />
      </MemoryRouter>
    );
    expect(screen.getByTestId('navigation_test')).toBeTruthy();
  });

  test('renders navigation links', () => {
    renderCustom(
      <MemoryRouter>
        <Navigation isDark Links={links} />
      </MemoryRouter>
    );
    const homeLink = screen.getByTestId('navigation_test');
    const aboutLink = screen.getByTestId('navigation_test');
    expect(homeLink).toBeTruthy();
    expect(aboutLink).toBeTruthy();
  });

  test('clicking on a link navigates to the correct route', () => {
    renderCustom(
      <MemoryRouter>
        <Navigation
          isDark
          Links={[{ text: 'Home', router: '/', icon: icons.globe }]}
        />
      </MemoryRouter>
    );

    const homeLink = screen.getByTestId('navigation_test');
    fireEvent.click(homeLink);

    expect(window.location.pathname).toBe('/');
  });

  test('renders correct link text', () => {
    renderCustom(
      <MemoryRouter>
        <Navigation isDark Links={links} />
      </MemoryRouter>
    );
    const homeLink = screen.getByTestId('navigation_test');
    expect(homeLink).toBeInTheDocument();
  });

  test('clicking on a link calls handlePushRouter', () => {
    const handlePushRouter = jest.fn();

    renderCustom(
      <MemoryRouter>
        <Navigation
          isDark
          handlePushRouter={handlePushRouter}
          Links={[{ text: 'Home', router: '/', icon: icons.globe }]}
        />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText('Home'));
    expect(handlePushRouter).toHaveBeenCalledTimes(1);
    expect(handlePushRouter).toHaveBeenCalledWith('/');
  });
});
