/* eslint-disable no-console */
import React from 'react';
import { renderCustom } from 'utils/renderCustom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input component', () => {
  test('renders with placeholder text', () => {
    renderCustom(<Input placeholder="Enter text" size="small" dark={false} />);
    expect(screen.getByPlaceholderText('Enter text')).toBeTruthy();
  });

  test('renders with disabled attribute', () => {
    renderCustom(
      <Input placeholder="Enter text" disabled size="small" dark={false} />
    );
    expect(screen.getByPlaceholderText('Enter text')).toBeDisabled();
  });

  test('renders with icon', () => {
    renderCustom(
      <Input
        placeholder="Enter text"
        iconUrl="icon.png"
        alt="icon"
        size="small"
        dark={false}
      />
    );
    expect(screen.getByAltText('icon')).toBeTruthy();
  });

  test('style Input component with variation size large', () => {
    renderCustom(<Input placeholder="Search" size="large" dark={false} />);

    const inputElement = screen.getByPlaceholderText('Search');
    const inputStyles = getComputedStyle(inputElement);
    expect(inputStyles.width).toBe('100%');
  });

  test('style Input component with variation size medium', () => {
    renderCustom(<Input placeholder="Search" size="medium" dark={false} />);

    const element = screen.getByTestId('input_test');
    const styles = getComputedStyle(element);
    expect(styles.width).toBe('50%');
  });

  test('style Input component with variation size small', () => {
    renderCustom(<Input placeholder="Search" size="small" dark={false} />);

    const element = screen.getByTestId('input_test');
    const styles = getComputedStyle(element);
    expect(styles.width).toBe('30%');
  });

  test('renders with search style', () => {
    renderCustom(
      <Input
        placeholder="Search"
        iconUrl="icon.png"
        search
        size="small"
        alt="search-icon"
        dark={false}
      />
    );
    const inputElement = screen.getByPlaceholderText('Search');
    expect(getComputedStyle(inputElement).paddingLeft).toEqual('1px');
    expect(screen.getByAltText('search-icon')).toBeTruthy();
  });

  test('renders with dark style', () => {
    renderCustom(
      <Input
        placeholder="Search"
        iconUrl="icon.png"
        search
        dark
        size="small"
        alt="search-icon"
      />
    );
    const inputElement = screen.getByTestId('input_test');
    const styles = getComputedStyle(inputElement);
    expect(styles.backgroundColor).toBe('rgb(62, 55, 88)');
  });

  test('should can change the field', async () => {
    renderCustom(
      <Input
        placeholder="Search"
        size="small"
        data-testid="search"
        dark={false}
      />
    );
    const input = screen.getByTestId('search');

    await userEvent.type(input, 'World!');

    expect(input).toHaveValue('World!');
  });

  test('should can not change the field', async () => {
    renderCustom(
      <Input
        placeholder="Search"
        size="small"
        data-testid="search"
        disabled
        dark={false}
      />
    );
    const input = screen.getByTestId('search');

    await userEvent.type(input, 'World!');

    expect(input).not.toHaveValue('World!');
  });
});
