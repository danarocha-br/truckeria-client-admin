import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ReactSkeleton, {
  SkeletonTheme,
  SkeletonProps,
} from 'react-loading-skeleton';

type SkeletonCustomProps = {
  animationOff?: boolean;
} & SkeletonProps;

const Skeleton = ({
  width = 50,
  height = 10,
  count = 1,
  animationOff,
  ...props
}: SkeletonCustomProps) => {
  const theme = useContext(ThemeContext);
  return (
    <SkeletonTheme
      color={
        animationOff
          ? theme.surface.loading.subdued
          : theme.surface.loading.default
      }
      highlightColor={theme.surface.loading.subdued}
    >
      <ReactSkeleton width={width} count={count} height={height} {...props} />
    </SkeletonTheme>
  );
};

export default Skeleton;
