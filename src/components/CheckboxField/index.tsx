import { InputHTMLAttributes, useState } from 'react';
import * as Styled from './styles';

export type CheckboxFieldProps = {
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
  label?: string;
  labelFor?: string;
  value?: string | ReadonlyArray<string> | number | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

const CheckboxField = ({
  onCheck,
  isChecked = false,
  label,
  labelFor = '',
  value,
  ...props
}: CheckboxFieldProps) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    const status = !checked;
    setChecked(status);
    !!onCheck && onCheck(status);
  };

  return (
    <Styled.Wrapper>
      <Styled.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && <Styled.Label htmlFor={labelFor}>{label}</Styled.Label>}
    </Styled.Wrapper>
  );
};

export default CheckboxField;
