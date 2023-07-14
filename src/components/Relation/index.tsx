import Button from '../Button';
import { Add as AddIcon } from '@styled-icons/material-outlined/Add';
import CountRelation from '../CountRelation';
import FindRelation from '../FindRelation';
import * as Styled from './styles';
import Table from '../Table';

export type RelationProps = {
  title: string;
};

const Relation = ({ title }: RelationProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Header>
        <FindRelation />
        <CountRelation />
        <Button icon={<AddIcon />}>Inserir</Button>
      </Styled.Header>
      <Table />
    </Styled.Wrapper>
  );
};

export default Relation;
