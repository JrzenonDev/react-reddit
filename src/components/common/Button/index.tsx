import { StyledButton } from "./style";

interface ButtonProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

export function Button({ text, active, onClick }: ButtonProps) {
  return (
    <>
      <StyledButton className={active ? "active" : ""} onClick={onClick}>
        {text}
      </StyledButton>
    </>
  );
}
