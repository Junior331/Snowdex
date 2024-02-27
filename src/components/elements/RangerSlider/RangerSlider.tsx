/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import Slider from '@mui/material/Slider';
import { Props } from './@types';
import * as S from './RangerSliderStyled';

const RangerSlider = ({
  min,
  max,
  dark,
  size,
  steps,
  value,
  disabled = false
}: Props) => {
  const [range] = useState(value);
  const sliderRef = useRef<any>();
  const [valueLines, setValueLines] = useState(0);
  const [offsetWidth, setOffsetWidth] = useState(0);

  useEffect(() => {
    const lines = (sliderRef.current.offsetWidth / 7 / 10).toFixed(0);
    setValueLines(parseFloat(lines));
  }, [sliderRef.current]);
  useEffect(() => {
    setOffsetWidth(sliderRef.current.offsetWidth);
  }, [sliderRef.current]);

  return (
    <S.Container size={size} dark={dark} data-testid="ranger_slider_test">
      <S.Header>
        <S.Text weight>24H Low</S.Text>
        <S.Text weight>24H High</S.Text>
      </S.Header>
      <S.Content dark={dark}>
        {min && <S.Text>${min}</S.Text>}
        <Slider
          min={min}
          max={max}
          step={steps}
          size="small"
          track={false}
          ref={sliderRef}
          aria-label="Small"
          disabled={disabled}
          defaultValue={range}
          valueLabelDisplay="auto"
        />
        <S.ContainerLines width={`${offsetWidth}px` || '0'}>
          {new Array(valueLines).fill('').map((item) => {
            return <S.Line key={item} dark={dark} />;
          })}
        </S.ContainerLines>
        {max && <S.Text>${max}</S.Text>}
      </S.Content>
    </S.Container>
  );
};

export default RangerSlider;
