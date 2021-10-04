import * as S from './styles';

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

const Heading = ({ children, className }: HeadingProps) => (
  <S.Heading className={className}>{children}</S.Heading>
);

export default Heading;
