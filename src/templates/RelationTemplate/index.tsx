import { useState } from 'react';
import * as Styled from './styles';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Relation from '../../components/Relation';

export type RelationTemplateProps = {
  children?: string;
};

const RelationTemplate = ({ children }: RelationTemplateProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Styled.Wrapper>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu menuVisible={isOpen} />
      <Styled.Content menuVisible={isOpen}>
        <Relation title="Categoria" />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default RelationTemplate;
