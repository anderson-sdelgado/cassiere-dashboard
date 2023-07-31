import { ThumbUpAlt as UpIcon } from '@styled-icons/material-outlined/ThumbUpAlt';
import { ThumbDownAlt as DownIcon } from '@styled-icons/material-outlined/ThumbDownAlt';
import { Edit as EditIcon } from '@styled-icons/material-outlined/Edit';
import { DeleteOutline as DeleteIcon } from '@styled-icons/material-outlined/DeleteOutline';

import * as Styled from './styles';
import Button from '../Button';
import ElementTable from '../ElementTable';

export type RowTableProps = {
  titles: string[];
  values: (number | string)[];
};

const RowTable = ({ titles, values }: RowTableProps) => {
  return (
    <Styled.RowWrapper>
      {values.map((v, index) => {
        let value = '';
        if (typeof v === 'number') {
          value = v.toString();
        } else {
          value = v;
        }
        if (titles[index] === 'id') {
          return (
            <ElementTable type="id" key={index}>
              {value}
            </ElementTable>
          );
        } else if (titles[index] === 'img') {
          return (
            <ElementTable type="img" key={index}>
              {value}
            </ElementTable>
          );
        } else {
          return <ElementTable key={index}>{value}</ElementTable>;
        }
      })}
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
