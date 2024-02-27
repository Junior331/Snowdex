import { useContext, useState } from 'react';
import icons from 'assets/img/Icon';
import { Button, Input } from 'components/elements';
import { ThemeContext } from 'contexts/ThemeContext';
import * as S from './AvailableBalanceStyled';

export const AvailableBalance = () => {
  const [valueActive, setValueActive] = useState('');
  const [modeActive, setModeActive] = useState('Buy');
  const [isCheck, setIsCheck] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <S.AvailableBalanceContainer>
      <S.Title>Available Balance</S.Title>
      <S.Container isColumn>
        <S.Token>
          <S.Logo>
            <S.Img
              size="36px"
              src={icons.logo}
              alt="Logo SnowDEX"
              data-testid="icon_test"
            />
            <S.Title size="16px">SDEX</S.Title>
          </S.Logo>
          <S.Balance>
            <S.Title size="16px">1,000,000</S.Title>
            <S.Text blue dark={isDarkMode}>
              ($3,000.00)
            </S.Text>
          </S.Balance>
        </S.Token>
        <S.Token>
          <S.Logo>
            <S.Img
              size="36px"
              src={icons.logo_avax}
              alt="Logo AVAX"
              data-testid="icon_test"
            />
            <S.Title size="16px">AVAX</S.Title>
          </S.Logo>
          <S.Balance>
            <S.Title size="16px">100</S.Title>
            <S.Text blue dark={isDarkMode}>
              ($1,800.00)
            </S.Text>
          </S.Balance>
        </S.Token>
      </S.Container>
      <S.Container isWrap>
        <Button
          size="large"
          secondary={modeActive === 'Sell'}
          onClick={() => setModeActive('Buy')}
        >
          Buy
        </Button>
        <Button
          onClick={() => setModeActive('Sell')}
          secondary={modeActive === 'Buy'}
          size="large"
        >
          Sell
        </Button>
      </S.Container>
      <S.Container alignItems>
        <S.Title size="16px">Limit Order</S.Title>
        <S.Switch
          dark={isDarkMode}
          isActive={isCheck}
          onClick={() => setIsCheck(!isCheck)}
        >
          <div />
        </S.Switch>
        <S.Title size="16px">Market Order</S.Title>
      </S.Container>
      <S.Container isColumn>
        <S.Title size="16px">Amount</S.Title>
        <Input
          isSecondary
          size="large"
          dark={isDarkMode}
          description="SDEX"
          placeholder="Enter Amount"
        />
        <S.Container isWrap>
          <S.Card
            isActive={valueActive === '25%'}
            onClick={() => setValueActive('25%')}
          >
            25%
          </S.Card>
          <S.Card
            isActive={valueActive === '50%'}
            onClick={() => setValueActive('50%')}
          >
            50%
          </S.Card>
          <S.Card
            isActive={valueActive === '75%'}
            onClick={() => setValueActive('75%')}
          >
            75%
          </S.Card>
          <S.Card
            isActive={valueActive === '100%'}
            onClick={() => setValueActive('100%')}
          >
            100%
          </S.Card>
        </S.Container>
      </S.Container>
      <S.Title>Total: 0.00 AVAX</S.Title>
      <Button gradient size="large">
        Place Order
      </Button>
    </S.AvailableBalanceContainer>
  );
};
