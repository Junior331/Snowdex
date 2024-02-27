/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import Card from 'components/modules/Card/Card';
import { useContext, useState } from 'react';
import { ThemeContext } from 'contexts/ThemeContext';
import { Button, Input } from 'components/elements';
import { YourProvides } from 'services/mocks/YourProvides';
import { YouReceives } from 'services/mocks/YouReceives';
import { AvailableRewards } from 'services/mocks/AvailableRewards';
import { Remittances } from 'services/mocks/Remittances';
import { Table } from 'components/modules';
import { useMobile } from 'hooks/useMobile';
import Pagination from '@mui/material/Pagination';
import * as S from './LiquidityStyled';
import { Item } from './components';

export const Liquidity = () => {
  const [isMobile] = useMobile();
  const [data, setData] = useState({
    currentPage: 1,
    paginatedRemittances: Remittances.itens.slice(0, Remittances.itemsPerPage)
  });
  const { isDarkMode } = useContext(ThemeContext);

  const handleNavigate = (router: string) => {
    window.open(router, '_blank', 'noreferrer');
  };

  const updatePaginatedRemittances = (page: number) => {
    const startIndex = (page - 1) * Remittances.itemsPerPage;
    const endIndex = startIndex + Remittances.itemsPerPage;
    const paginatedRemittances = Remittances.itens.slice(startIndex, endIndex);

    return paginatedRemittances;
  };

  const handleChange = (_event: unknown, page: number): void => {
    const paginatedRemittances = updatePaginatedRemittances(page);
    setData({
      currentPage: page,
      paginatedRemittances
    });
  };

  return (
    <S.LiquidityContainer dark={isDarkMode}>
      <S.Content>
        <Card
          dark={isDarkMode}
          width={isMobile ? '100%' : '697px'}
          height={isMobile ? 'auto' : '640px'}
          isColumn
        >
          <S.Title>Earn</S.Title>
          <Input
            isSecondary
            size="large"
            dark={isDarkMode}
            description="USD"
            placeholder="Enter Amount"
          />
          <S.Title size="2.0">You Provide</S.Title>
          <S.Container>
            {YourProvides?.map((item, index) => {
              return (
                <Item
                  key={index}
                  name={item.name}
                  icon={item.icon}
                  dark={isDarkMode}
                  price={item.price}
                  amount={item.amount}
                  description={item.description}
                />
              );
            })}
          </S.Container>
          <S.Container margin="21px 0 0">
            <S.Title size="2.0">You Receive</S.Title>{' '}
            {YouReceives?.map((item, index) => {
              return (
                <Item
                  isSecondary
                  key={index}
                  name={item.name}
                  icon={item.icon}
                  dark={isDarkMode}
                  price={item.price}
                  amount={item.amount}
                  description={item.description}
                />
              );
            })}
          </S.Container>
          <S.Text isSecondary dark={isDarkMode}>
            SDAO is a token that provides monthly AVAX dividends to holders
            generated from SnowDEX.io
          </S.Text>
          <Button gradient size="large">
            Place Order
          </Button>
        </Card>
        <Card
          dark={isDarkMode}
          width={isMobile ? '100%' : '697px'}
          height={isMobile ? 'auto' : '640px'}
          isColumn
        >
          <S.Title>Total Rewards</S.Title>
          <S.Container isSecondary margin="10px 0 0">
            <S.ContentText>
              <S.Text>Estimated Daily:</S.Text>
              <S.Span dark={isDarkMode}>$1,000.00</S.Span>
            </S.ContentText>
            <S.ContentText>
              <S.Text>Estimated Weekly:</S.Text>
              <S.Span dark={isDarkMode}>$7,000.00</S.Span>
            </S.ContentText>
            <S.ContentText>
              <S.Text>Estimated Monthly:</S.Text>
              <S.Span dark={isDarkMode}>$30,000.00</S.Span>
            </S.ContentText>
          </S.Container>
          <S.Container isSecondary margin="47px 0">
            <S.ContentText>
              <S.Text>Deposit Fee:</S.Text>
              <S.Span dark={isDarkMode}>0%</S.Span>
            </S.ContentText>
            <S.ContentText>
              <S.Text>Days Until Next Payout:</S.Text>
              <S.Span dark={isDarkMode}>14 Days</S.Span>
            </S.ContentText>
          </S.Container>
          <S.Container>
            <S.Title size="2.0">Available Rewards</S.Title>
            {AvailableRewards?.map((item, index) => {
              return (
                <Item
                  isSecondary
                  key={index}
                  name={item.name}
                  icon={item.icon}
                  dark={isDarkMode}
                  price={item.price}
                  amount={item.amount}
                  description={item.description}
                />
              );
            })}
          </S.Container>
          <S.Text isSecondary dark={isDarkMode}>
            Compounding your Rewards each month will give you an additional
            0.20% in SDAO tokens
          </S.Text>
          <S.ContainerButton>
            <Button gradient size="large">
              Claim Rewards
            </Button>
            <Button gradient size="large">
              Compound
            </Button>
          </S.ContainerButton>
        </Card>
      </S.Content>
      <Card dark={isDarkMode} width="100%" height="auto" isColumn>
        <S.Title>Remittances</S.Title>
        <Table
          Title=""
          listTh={[
            'Timestamp',
            'AVAX collected',
            'USD Remitted',
            'Transaction'
          ]}
        >
          {data.paginatedRemittances?.map((item) => {
            return (
              <S.Tr
                key={item.id}
                onClick={() => handleNavigate(item.transaction)}
              >
                <S.Td width="16%">
                  <S.Text>{item.date}</S.Text>
                </S.Td>
                <S.Td width="16%">
                  <S.Text>{item.price}</S.Text>
                </S.Td>
                <S.Td width="16%">
                  <S.Text>{item.amount}</S.Text>
                </S.Td>
                <S.Td width="16%">
                  <S.Text>
                    {item.transaction?.substring(0, 4)}****
                    {item.transaction?.substring(item.transaction.length - 4)}
                  </S.Text>
                </S.Td>
              </S.Tr>
            );
          })}
        </Table>
        <S.PaginationWrapper dark={isDarkMode}>
          <Pagination
            color="primary"
            siblingCount={0}
            boundaryCount={2}
            onChange={handleChange}
            page={data.currentPage}
            count={Remittances.totalPages}
          />
        </S.PaginationWrapper>
      </Card>
    </S.LiquidityContainer>
  );
};
