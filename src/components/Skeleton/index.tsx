import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ReactSkeleton, {
  SkeletonTheme,
  SkeletonProps,
} from 'react-loading-skeleton';

const Skeleton = ({
  width = 50,
  height = 10,
  count = 1,
  ...props
}: SkeletonProps) => {
  const theme = useContext(ThemeContext);
  return (
    <SkeletonTheme
      color={theme.surface.loading.default}
      highlightColor={theme.surface.loading.subdued}
    >
      <ReactSkeleton width={width} count={count} height={height} {...props} />
    </SkeletonTheme>
  );
};

export default Skeleton;
