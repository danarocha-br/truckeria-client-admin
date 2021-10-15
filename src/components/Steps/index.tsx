import * as S from './styles';

type StepItem = {
  label: string;
  to: string;
  isActive?: boolean;
  isComplete?: boolean;
};

type StepProps = {
  steps: StepItem[];
};

const Stepper = ({ steps }: StepProps) => (
  <S.Container>
    <S.List>
      {steps &&
        steps.map((item, index) => (
          <S.Item
            key={index}
            isActive={item.isActive}
            isComplete={item.isComplete}
            aria-label={item.label}
          >
            <span> {item.label}</span>
          </S.Item>
        ))}
    </S.List>
  </S.Container>
);

export default Stepper;
