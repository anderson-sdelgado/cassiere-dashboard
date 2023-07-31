import Button from '../Button';
import { Add as AddIcon } from '@styled-icons/material-outlined/Add';
import CountRelation from '../CountRelation';
import * as Styled from './styles';
import Table from '../Table';
import PaginateTable from '../PaginateTable';
import Title from '../Title';
import TextField from '../TextField';

export type RelationProps = {
  title: string;
};

const Relation = ({ title }: RelationProps) => {
  return (
    <Styled.Wrapper>
      <Title>{title}</Title>
      <Styled.Header>
        <TextField name="Pesquisar" />
        <CountRelation />
        <Button icon={<AddIcon />} bgcolor="green" color="white">
          Inserir
        </Button>
      </Styled.Header>
      <Table />
      <PaginateTable />
    </Styled.Wrapper>
  );
};

export default Relation;
