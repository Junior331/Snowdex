import Card from 'components/modules/Card/Card';
import { useContext, useState } from 'react';
import { ThemeContext } from 'contexts/ThemeContext';
import { SideBar, Table } from 'components/modules';
import { OpenOrdersTradeHistory } from 'services/mocks/OpenOrdersTradeHistory';
import { TradeHistory } from 'services/mocks/TradeHistory';
import { Orderbook } from 'services/mocks/Orderbook';
import { useMobile } from 'hooks/useMobile';
import icons from 'assets/img/Icon';
import { RangerSlider } from 'components/elements';
import { SubHeader, AvailableBalance } from './components';
import * as S from './HomeStyled';

export const Home = () => {
  const [isMobile] = useMobile();
  const { isDarkMode } = useContext(ThemeContext);
  const [itemActive, setItemActive] = useState<string>('Trade');

  const getItemActive = (item: string): void => {
    setItemActive(item);
  };

  return (
    <S.HomeContainer>
      <S.Container
        width={isMobile ? '100%' : '50.5%'}
        flex={isMobile ? 'none' : '1 1 900px'}
        isActive={
          itemActive === 'Trade' ||
          itemActive === 'Chart' ||
          itemActive === 'Orders'
        }
      >
        <Card
          width="100%"
          height="96px"
          dark={isDarkMode}
          isActive={itemActive === 'Trade'}
        >
          <SubHeader dark={isDarkMode} />
        </Card>
        <Card
          width="100%"
          height="62%"
          dark={isDarkMode}
          isActive={itemActive === 'Chart'}
        >
          <S.Title>ComingSoon</S.Title>
        </Card>
        <Card
          width="100%"
          dark={isDarkMode}
          isActive={itemActive === 'Orders'}
          height={isMobile ? 'auto' : '22.7%'}
        >
          <Table
            isBlue
            Title="Open Orders / Trade History"
            listTh={['Type', 'Price', 'Volume', 'Total', 'Actions']}
          >
            {OpenOrdersTradeHistory?.map((item) => {
              return (
                <S.Tr key={item.id}>
                  <S.Td width={item.size}>
                    <S.Type type={item.type}>{item.value}</S.Type>
                  </S.Td>
                  <S.Td width="16%">
                    <S.Text blue>{item.price}</S.Text>
                  </S.Td>
                  <S.Td width="16%">
                    <S.Text blue>{item.volume}</S.Text>
                  </S.Td>
                  <S.Td width="16%">
                    <S.Text blue>{item.total}</S.Text>
                  </S.Td>
                  <S.Td width="16%">
                    <S.Text blue>{item.action}</S.Text>
                  </S.Td>
                </S.Tr>
              );
            })}
          </Table>
        </Card>
      </S.Container>
      <S.Container
        width={isMobile ? '100%' : '23%'}
        isActive={itemActive === 'Orderbook' || itemActive === 'History'}
        flex={isMobile ? 'none' : '1 1 410px'}
      >
        <Card
          width="100%"
          height="96px"
          dark={isDarkMode}
          isActive={itemActive === 'Orderbook'}
        >
          <RangerSlider
            disabled
            size="large"
            max={0.005}
            min={0.003}
            steps={0.001}
            value={0.004}
            dark={isDarkMode}
          />
        </Card>
        <Card
          isActive={itemActive === 'Orderbook'}
          dark={isDarkMode}
          width="100%"
          height="42.2%"
          noPadding
          isColumn
        >
          <S.CustonContent>
            <Table
              striped
              isPadding
              Title="Orderbook"
              isDark={isDarkMode}
              isBlue={!isDarkMode}
              isGray={isDarkMode}
              listTh={['Price', 'Volume', 'Total']}
            >
              {Orderbook?.map((item) => {
                return (
                  <S.Tr key={item.id} isPadding>
                    <S.Td width={item.size}>
                      <S.Text isLow>{item.price}</S.Text>
                    </S.Td>
                    <S.Td width={item.size}>
                      <S.Text isLow>{item.volume}</S.Text>
                    </S.Td>
                    <S.Td width={item.size}>
                      <S.Text isLow>{item.total}</S.Text>
                    </S.Td>
                  </S.Tr>
                );
              })}
            </Table>
            <S.Status>
              <S.Title>$1.00</S.Title>
              <S.Icon src={icons.arrow_increase} alt="" />
              <S.TypeTransaction dark={isDarkMode}>
                Last Transaction
              </S.TypeTransaction>
            </S.Status>
            <Table
              striped
              isPadding
              Title=""
              isDark={isDarkMode}
              isBlue={!isDarkMode}
              isGray={isDarkMode}
              listTh={['', '', '']}
            >
              {Orderbook?.map((item) => {
                return (
                  <S.Tr key={item.id} isPadding>
                    <S.Td width={item.size}>
                      <S.Text green>{item.price}</S.Text>
                    </S.Td>
                    <S.Td width={item.size}>
                      <S.Text green>{item.volume}</S.Text>
                    </S.Td>
                    <S.Td width={item.size}>
                      <S.Text green>{item.total}</S.Text>
                    </S.Td>
                  </S.Tr>
                );
              })}
            </Table>
          </S.CustonContent>
        </Card>
        <Card
          noPadding
          width="100%"
          dark={isDarkMode}
          isActive={itemActive === 'History'}
          height={isMobile ? '100%' : '43.2%'}
        >
          <Table
            striped
            isPadding
            isDark={isDarkMode}
            isBlue={!isDarkMode}
            isGray={isDarkMode}
            Title="Trade History"
            listTh={['Type', 'Volume', 'Time']}
          >
            {TradeHistory?.map((item) => {
              return (
                <S.Tr key={item.id} isPadding>
                  <S.Td width={item.size}>
                    <S.Text green>{item.price}</S.Text>
                  </S.Td>
                  <S.Td width={item.size}>
                    <S.Text green>{item.volume}</S.Text>
                  </S.Td>
                  <S.Td width={item.size}>
                    <S.Text green>{item.time}</S.Text>
                  </S.Td>
                </S.Tr>
              );
            })}
          </Table>
        </Card>
      </S.Container>
      <Card
        width="350px"
        height="100%"
        dark={isDarkMode}
        isActive={itemActive === 'Trade'}
      >
        <AvailableBalance />
      </Card>
      {isMobile && <SideBar dark={isDarkMode} onChange={getItemActive} />}
    </S.HomeContainer>
  );
};
