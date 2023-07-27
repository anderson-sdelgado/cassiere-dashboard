import * as Styled from './styles';

export type ElementTableProps = {
  title: string;
  children?: string;
  img?: string;
  isID?: boolean;
};

const ElementTable = ({ title, children, img, isID }: ElementTableProps) => {
  return (
    <Styled.ElementWrapper isImg={!!img} title={title} isID={isID}>
      {!!img && <img src={children} />}
      {!img && children}
    </Styled.ElementWrapper>
  );
};

export default ElementTable;
