import { useState } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import * as Styled from './styles';
import Maintenance from '../../components/Maintenance';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Styled.Wrapper>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Styled.Main isOpen={isOpen}>
        <Menu />
        <Styled.Content>
          <Maintenance title="Inserir Produto" />
        </Styled.Content>
      </Styled.Main>
    </Styled.Wrapper>
  );
};

export default Home;
