import { useState } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import * as Styled from './styles';
import Maintenance from '../../components/Maintenance';
import Relation from '../../components/Relation';

export type HomeTemplateProps = {
  data: any;
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Styled.Wrapper>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Styled.Main isOpen={isOpen}>
        <Menu />
        <Styled.Content>
          <Relation title="Categorias" />
        </Styled.Content>
      </Styled.Main>
    </Styled.Wrapper>
  );
};

export default Home;
