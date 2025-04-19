import { ProgressBarProps } from './types';
import * as S from './styles';

const ProgressBar = ({
  progress,
  height,
  backgroundColor,
  fillColor,
  borderRadius,
}: ProgressBarProps) => {
  return (
    <S.Wrapper>
      <S.Container
        height={height}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        role='progressbar'
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
      >
        <S.Filler progress={progress} fillColor={fillColor} />
      </S.Container>
      <S.ProgressText>{progress}%</S.ProgressText>
    </S.Wrapper>
  );
};

export default ProgressBar;
