import { StyledButton } from "./style";

interface ButtonProps {
  text: string;
  active: boolean;
}

export function Button({ text, active }: ButtonProps) {
  return (
    <>
      <StyledButton className={active ? "active" : ""}>{text}</StyledButton>
    </>
  );
}
