import { Story, Meta } from '@storybook/react/types-6-0';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import { AnyObjectSchema } from 'yup';

import Select from '.';
import { FOOD_TYPE_OPTIONS } from 'constants/index';
import { useCallback } from 'react';
import FormControl from 'components/FormControl';

export default {
  title: 'Form Controls/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 'type',
    name: 'type',
    label: 'Select a food type',
    options: FOOD_TYPE_OPTIONS,
    loading: false,
    disabled: false,
    isMulti: false,
    isClearable: false,
  },
  argTypes: {
    id: {
      table: {
        category: 'Text',
      },
    },
    name: {
      table: {
        category: 'Text',
      },
    },
    label: {
      table: {
        category: 'Text',
      },
    },
    options: {
      table: {
        category: 'Text',
      },
    },
    isMulti: {
      table: {
        category: 'Modifiers',
      },
    },
    isClearable: {
      table: {
        category: 'Modifiers',
      },
    },
    loading: {
      table: {
        category: 'Modifiers',
      },
    },
    disabled: {
      table: {
        category: 'Modifiers',
      },
    },
  },
} as Meta;

const Template: Story = (args) => {
  type FormData = {
    cuisines: {
      label: string;
      value: string;
    };
  };

  const initialValues: FormData = {
    cuisines: {
      label: '',
      value: '',
    },
  };

  const SampleSchema = Yup.object().shape({
    cuisines: Yup.object()
      .shape({
        label: Yup.string().required('Please choose a cuisine type.'),
        value: Yup.string().required('Please choose a cuisine type.'),
      })
      .required('Please choose a cuisine type.'),
  });

  const methods = useForm<FormData>({
    defaultValues: { ...initialValues },
    mode: 'onTouched',
    resolver: yupResolver<AnyObjectSchema>(SampleSchema),
  });

  const {
    handleSubmit,
    // formState: { isSubmitting },
  } = methods;

  const onSubmit = useCallback(async (values: FormData) => {
    console.log(values);
  }, []);

  return (
    <div className="w-96">
      <FormProvider {...methods}>
        <FormControl onSubmit={handleSubmit(onSubmit)}>
          <Select
            {...args}
            name="cuisines"
            id="cuisines"
            label="Select a food type"
            options={FOOD_TYPE_OPTIONS}
          />
        </FormControl>
      </FormProvider>
    </div>
  );
};

export const Single = Template.bind({});

const MultiTemplate: Story = (args) => {
  type FormData = {
    cuisines: {
      label: string;
      value: string;
    }[];
  };

  const initialValues: FormData = {
    cuisines: [],
  };

  const MultiSchema = Yup.object().shape({
    cuisines: Yup.array()
      .of(
        Yup.object().shape({
          label: Yup.string(),
          value: Yup.string(),
        })
      )
      .min(1, 'Select at least one cuisine type.')
      .max(5, 'You can select up to 5 cuisines.')
      .required('Please select at least one cuisine type.'),
  });

  const methods = useForm<FormData>({
    defaultValues: { ...initialValues },
    mode: 'onTouched',
    resolver: yupResolver<AnyObjectSchema>(MultiSchema),
  });

  const {
    handleSubmit,
    // formState: { isSubmitting },
  } = methods;

  const onSubmit = useCallback(async (values: FormData) => {
    console.log(values);
  }, []);

  return (
    <div className="w-96">
      <FormProvider {...methods}>
        <FormControl onSubmit={handleSubmit(onSubmit)}>
          <Select
            {...args}
            name="type"
            id="type"
            label="Select a food type"
            options={FOOD_TYPE_OPTIONS}
            isMulti
          />
        </FormControl>
      </FormProvider>
    </div>
  );
};

export const isMulti = MultiTemplate.bind({});

export const DefaultValue: Story = (args) => {
  type FormData = {
    cuisines: { label: string; value: string }[];
  };

  const initialValues: FormData = {
    cuisines: [FOOD_TYPE_OPTIONS[2], FOOD_TYPE_OPTIONS[3]],
  };

  const MultiSchema = Yup.object().shape({
    cuisines: Yup.array()
      .of(
        Yup.object().shape({
          label: Yup.string(),
          value: Yup.string(),
        })
      )
      .min(1, 'Select at least one cuisine type.')
      .max(5, 'You can select up to 5 cuisines.')
      .required('Please select at least one cuisine type.'),
  });

  const methods = useForm<FormData>({
    defaultValues: { ...initialValues },
    mode: 'onTouched',
    resolver: yupResolver<AnyObjectSchema>(MultiSchema),
  });

  const {
    handleSubmit,
    // formState: { isSubmitting },
  } = methods;

  const onSubmit = useCallback(async (values: FormData) => {
    console.log(values);
  }, []);

  return (
    <div className="w-96">
      <FormProvider {...methods}>
        <FormControl onSubmit={handleSubmit(onSubmit)}>
          <Select
            {...args}
            name="type"
            id="type"
            label="Select a food type"
            defaultValue={[FOOD_TYPE_OPTIONS[2], FOOD_TYPE_OPTIONS[3]]}
            options={FOOD_TYPE_OPTIONS}
            isMulti
          />
        </FormControl>
      </FormProvider>
    </div>
  );
};
