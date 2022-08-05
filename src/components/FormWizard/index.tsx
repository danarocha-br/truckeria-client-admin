import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import {
  FormProvider,
  useForm,
  FormProviderProps,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  FormControl,
  Button,
  StepperItemProps,
  Stepper,
  ScrollArea,
} from 'components';

export type FormWizardHandles = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  methods: UseFormReturn<any, object>;
};

export interface StepProps
  extends Pick<FormProviderProps<FieldValues>, 'children'> {
  validationSchema: yup.ObjectSchema<any>;
}

export interface FormWizardProps {
  onSubmit: (values: any) => void;
  initialValues: yup.InferType<any>;
  children: React.ReactNode;
  steps: StepperItemProps[];
}

export function FormStep({ children }: StepProps) {
  return <>{children}</>;
}

export const FormWizard = forwardRef(
  (
    { children, initialValues, onSubmit, steps, ...props }: FormWizardProps,
    ref
  ) => {
    const childrenArray = React.Children.toArray(
      children
    ) as React.ReactElement<StepProps>[];

    const [step, setStep] = useState(0);

    const currentChild = useMemo(
      () => childrenArray[step],
      [childrenArray, step]
    );

    const isLastStep = () => {
      return step === childrenArray.length - 1;
    };

    const methods = useForm({
      defaultValues: { ...initialValues },
      mode: 'onChange',
      resolver: yupResolver(currentChild.props.validationSchema),
    });

    useImperativeHandle(ref, () => ({
      methods,
    }));

    const {
      handleSubmit,
      formState: { isSubmitting, isValid },
    } = methods;

    return (
      <FormProvider {...methods}>
        <Stepper steps={steps} activeIndex={step} />

        <ScrollArea hideScrollHorizontal>
          <FormControl
            onSubmit={() => {
              if (step === childrenArray.length - 1) {
                handleSubmit(onSubmit);
              } else {
                setStep((currentStep) => currentStep + 1);
              }
            }}
            {...props}
            css={{
              px: '$1',
              pr: '$4',
              mx: 'auto',
              mb: '$9',
              '@bp-lg': {
                maxWidth: 600,
              },
            }}
          >
            {currentChild}

            <Button
              type="submit"
              label={isLastStep() ? 'Finalizar' : 'Continuar'}
              fullWidth
              color="success"
              loading={isSubmitting}
              disabled={!isValid}
              onClick={() => ''}
              css={{ mt: '$2', position: 'sticky', bottom: '$6' }}
            />
          </FormControl>
        </ScrollArea>
      </FormProvider>
    );
  }
);
