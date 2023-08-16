import * as Styled from './styles';

export type MaintenanceTemplateProps = {
  children?: string;
};

const MaintenanceTemplate = ({ children }: MaintenanceTemplateProps) => {
  return (
    <Styled.Wrapper>
      <p>{children}</p>
    </Styled.Wrapper>
  );
};

export default MaintenanceTemplate;
