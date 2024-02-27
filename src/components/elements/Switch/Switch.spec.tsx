/* eslint-disable no-console */
import { fireEvent, screen } from '@testing-library/react';
import { renderCustom } from 'utils/renderCustom';
// import userEvent from '@testing-library/user-event';
import Switch from './Switch';

describe('Switch component', () => {
  const onClick = jest.fn();

  test('should can click in switch', () => {
    renderCustom(
      <Switch dark={false} handleToggle={onClick} isChecked={false} />
    );
    fireEvent.click(screen.getByTestId('switch_test'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('should render switch variation dark', () => {
    renderCustom(<Switch dark handleToggle={onClick} isChecked={false} />);
    const styles = getComputedStyle(screen.getByTestId('switch_test'));
    expect(styles.backgroundColor).toBe('rgb(62, 55, 88)');
  });

  test('should render switch variation isChecked', () => {
    renderCustom(<Switch dark={false} handleToggle={onClick} isChecked />);
    const styles = getComputedStyle(screen.getByTestId('icon_test'));
    expect(styles.width).toBe('30%');
    expect(styles.left).toBe('60%');
  });
});
