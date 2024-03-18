import styled from "styled-components";



interface ButtonProps {
    $backgroundColor: string;
    width: string;
    height: string;
    $borderRadius: string;
    $borderColor?: string;
    $fontColor?: string;
    $fontSize?: string;
    $children: React.ReactNode;
    onButtonClick?: () => void;
    disabled?: boolean;
  }


const StyledButton = styled.button<ButtonProps>`
  font-family: 'Pretendard SemiBold';
  background-color: ${(props) => (props.$backgroundColor ? props.$backgroundColor : '#4382ff')};
  width: ${(props) => (props.width ? props.width : '350px')};
  height: ${(props) => (props.height ? props.height : '45px')};
  border-radius: ${(props) => (props.$borderRadius ? props.$borderRadius : '10px')};
  color: ${(props) => (props.$fontColor ? props.$fontColor : '#ffffff')};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '18px')};
  border: ${(props) => (props.$borderColor ? `1px solid ${props.$borderColor}` : '0')};
  cursor: pointer;
`;

export default StyledButton