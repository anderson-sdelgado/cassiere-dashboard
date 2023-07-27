import { ThumbUpAlt as UpIcon } from '@styled-icons/material-outlined/ThumbUpAlt';
import { ThumbDownAlt as DownIcon } from '@styled-icons/material-outlined/ThumbDownAlt';
import { Edit as EditIcon } from '@styled-icons/material-outlined/Edit';
import { DeleteOutline as DeleteIcon } from '@styled-icons/material-outlined/DeleteOutline';

import * as Styled from './styles';
import Button from '../Button';
import ElementTable from '../ElementTable';

export type RowTableProps = {
  keys: string[];
  values: string[];
};

const RowTable = ({ keys, values }: RowTableProps) => {
  const rows = [];
  for (let i = 0; i < keys.length; i++) {
    rows.push(
      <ElementTable key={i} title={keys[i]}>
        {values[i]}
      </ElementTable>,
    );
  }
  return (
    <Styled.RowWrapper>
      {rows}
      <Styled.ElementIconWrapper>
        <Button icon={<UpIcon />} bgcolor="white" color="black" />
      </Styled.ElementIconWrapper>
      <Styled.ElementIconWrapper>
        <Button icon={<EditIcon />} bgcolor="blue" color="white" />
      </Styled.ElementIconWrapper>
      <Styled.ElementIconWrapper>
        <Button icon={<DeleteIcon />} bgcolor="red" color="white" />
      </Styled.ElementIconWrapper>
    </Styled.RowWrapper>
  );
};

export default RowTable;
