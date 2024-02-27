import { useState } from 'react';
import icons from 'assets/img/Icon';
import * as S from './SideBarStyled';
import { Props } from './@types';

const SideBar = ({ dark, onChange = () => {} }: Props) => {
  const [isActive, setIsActive] = useState<string>('Trade');

  const handleChange = (item: string) => {
    onChange(item);
    setIsActive(item);
  };
  return (
    <S.SideBarContainer dark={dark}>
      <S.Item
        dark={dark}
        isActive={isActive === 'Trade'}
        onClick={() => handleChange('Trade')}
      >
        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
        </svg>
        <S.Title>Trade</S.Title>
      </S.Item>
      <S.Item
        dark={dark}
        isActive={isActive === 'Chart'}
        onClick={() => handleChange('Chart')}
      >
        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z" />
        </svg>
        <S.Title>Chart</S.Title>
      </S.Item>
      <S.Item
        dark={dark}
        isActive={isActive === 'Orderbook'}
        onClick={() => handleChange('Orderbook')}
      >
        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .65.73.45.75.45C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.41.21.75-.19.75-.45V6c-1.49-1.12-3.63-1.5-5.5-1.5zm3.5 14c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
        </svg>
        <S.Title>Orderbook</S.Title>
      </S.Item>
      <S.Item
        dark={dark}
        isActive={isActive === 'History'}
        onClick={() => handleChange('History')}
      >
        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
        </svg>
        <S.Title>History</S.Title>
      </S.Item>
      <S.Item
        dark={dark}
        isActive={isActive === 'Orders'}
        onClick={() => handleChange('Orders')}
      >
        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
        </svg>
        <S.Title>Orders</S.Title>
      </S.Item>
    </S.SideBarContainer>
  );
};

export default SideBar;
