/* eslint-disable no-console */
import React from 'react';
import { renderCustom } from 'utils/renderCustom';
import Table from './Table';

describe('Table component', () => {
  test('renders without crashing', () => {
    renderCustom(
      <Table listTh={[]} Title="Teste">
        <h2>Teste</h2>
      </Table>
    );
  });
});
