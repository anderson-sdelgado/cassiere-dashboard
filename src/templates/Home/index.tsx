import { useState } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import * as Styled from './styles';
import Relation from '../../components/Relation';

export type HomeTemplateProps = {
  children?: string;
};

const Home = ({ children }: HomeTemplateProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Styled.Wrapper>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Styled.Main isOpen={isOpen}>
        <Menu />
        <Styled.Content>
          <Relation title="Produto" />
        </Styled.Content>
      </Styled.Main>
    </Styled.Wrapper>
  );
};

export default Home;
