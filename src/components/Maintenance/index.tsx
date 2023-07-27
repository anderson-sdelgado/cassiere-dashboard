import FileField from '../FileField';
import TextField from '../TextField';
import Title from '../Title';
import * as Styled from './styles';

export type MaintenanceProps = {
  title: string;
};

const Maintenance = ({ title }: MaintenanceProps) => {
  return (
    <Styled.Wrapper>
      <Title>{title}</Title>
      <FileField name="cover" />
      <TextField name="title" />
      <TextField name="slug" />
    </Styled.Wrapper>
  );
};

export default Maintenance;
