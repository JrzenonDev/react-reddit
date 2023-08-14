import { StyledButton } from "./style";

interface ButtonProps {
  text: string;
  isActive: boolean;
  width?: string;
  onClick: () => void;
}

export function Button({ text, isActive, width, onClick }: ButtonProps) {
  return (
    <StyledButton data-is-active={isActive} width={width} onClick={onClick}>
      {text}
    </StyledButton>
  );
}
