import { useState } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import * as Styled from './styles';

export type HomeTemplateProps = {
  data: any;
};

const HomeTemplate = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Styled.Wrapper>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu menuVisible={isOpen} />
      <Styled.Content menuVisible={isOpen}>
        {/* <Relation title="Categorias" /> */}
        Dashboard
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default HomeTemplate;
