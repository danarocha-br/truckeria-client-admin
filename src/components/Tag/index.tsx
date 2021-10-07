import Skeleton from 'components/Skeleton';

import * as S from './styles';

type TagProps = {
  label: string;
  loading?: boolean;
  isEmpty?: boolean;
};

const Tag = ({ label, loading, isEmpty }: TagProps) => (
  <>
    {loading ? (
      <S.Container>
        <Skeleton width={50} />
      </S.Container>
    ) : (
      <S.Container aria-label={label}>
        {isEmpty ? <Skeleton width={50} animationOff /> : label}
      </S.Container>
    )}
  </>
);

export default Tag;
