import React from 'react';
import StyledButton from './Button.styled';

type ButtonProps = {
  $backgroundColor: string;
  width: string;
  height: string;
  $borderRadius: string;
  $borderColor?: string;
  $fontColor?: string;
  $fontSize?: string;
  $children?: React.ReactNode;
  onButtonClick?: () => void;
  disabled?: boolean;
}


/**
 * Button 컴포넌트
 * -backgroundColor: '#000000' 과 같이 색상 코드 지정
 * -fontColor: '#000000' 과 같이 색상 코드 지정
 * -borderColor: '#000000' 과 같이 색상 코드 지정
 * -width, height: '12px' 과 같이 크기 단위와 함께 지정
 * -borderRadius: '12px' 과 같이 크기 단위와 함께 지정
 * -fontSize: '12px'과 같이 크기 단위와 함께 지정
 * -onButtonClick: 버튼 클릭시 일어날 이벤트 지정(화살표 함수 형태)
 * @author 승재홍
 * @param props
 * @returns
 */
const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      onClick={props.onButtonClick}
      $backgroundColor={props.$backgroundColor}
      width={props.width}
      height={props.height}
      $borderRadius={props.$borderRadius}
      $borderColor={props.$borderColor}
      $fontColor={props.$fontColor}
      $fontSize={props.$fontSize}
    >
      {props.$children}
    </StyledButton>
  );
};

export default Button;
