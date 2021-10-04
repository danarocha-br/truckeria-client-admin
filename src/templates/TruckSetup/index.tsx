/* eslint-disable react/no-unescaped-entities */
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import { HiOutlineMail, HiOutlinePhone, HiOutlineGlobe } from 'react-icons/hi';
import { FiInstagram, FiFacebook } from 'react-icons/fi';

import TextInput from 'components/TextInput';
import Button from 'components/Button';
import FormControl from 'components/FormControl';

import * as S from './styles';
import Heading from 'components/Heading';
import Logo from 'components/Logo';
import Preview from './Preview';

export type FormData = {
  files?: string[];
  name: string;
  cuisines: string[];
  state: string;
  city: string;
  phone: number | string;
  web?: string;
  instagram?: string;
  facebook?: string;
};

const initialValues: FormData = {
  files: [],
  name: '',
  cuisines: [],
  state: '',
  city: '',
  phone: '',
  web: '',
  instagram: '',
  facebook: '',
};

const TruckSetupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please insert your food truck name.')
    .min(3, 'Name must have at least 3 characters.'),
  cuisines: Yup.array()
    .min(1, 'Select at least one cuisine type.')
    .of(
      Yup.object()
        .shape({
          label: Yup.string(),
          value: Yup.string(),
        })
        .nullable()
    )
    .max(5, 'You can select up to 5 cuisines.')
    .required('Please select at least one cuisine type.'),
  files: Yup.array(),
  state: Yup.string().required('Please choose your state.'),
  city: Yup.string().required('Please choose your city.'),
});

export default function TruckSetup() {
  const router = useRouter();

  const methods = useForm<FormData>({
    defaultValues: { ...initialValues },
    mode: 'all',
    resolver: yupResolver<Yup.AnyObjectSchema>(TruckSetupSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = useCallback(
    async (values: FormData) => {
      console.log(values);
      router.push('/dashboard');
    },
    [router]
  );

  return (
    <S.Wrapper>
      <S.Content>
        <Logo symbolOnly className="mb-6 md:absolute md:left-8" />

        <Heading className="text-center mt-4">Your FoodTruck Info</Heading>
        <p className="text-center text-opacity-60 mb-8 mt-2">
          Tell your customers as much as possibile about your food truck!
        </p>

        <FormProvider {...methods}>
          <FormControl onSubmit={handleSubmit(onSubmit)} className="md:px-32">
            <h2 className="border-b border-dashed border-neutral-300 opacity-50">
              Basic Info
            </h2>
            <TextInput
              id="name"
              name="name"
              label="Your food truck name"
              autoComplete="off"
              loading={isSubmitting}
            />
            <TextInput
              id="description"
              name="description"
              label="About your food-truck"
              autoComplete="off"
              loading={isSubmitting}
            />

            <h2 className="border-b border-dashed border-neutral-300 opacity-50">
              Contact Info
            </h2>
            <TextInput
              id="phone"
              name="phone"
              label="Your phone number"
              type="number"
              autoComplete="off"
              inputMode="tel"
              icon={HiOutlinePhone}
            />
            <TextInput
              id="email"
              name="email"
              label="Food-truck e-mail"
              type="email"
              inputMode="email"
              autoComplete="off"
              icon={HiOutlineMail}
            />
            <TextInput
              id="web"
              name="web"
              label="Your website"
              inputMode="url"
              autoComplete="off"
              icon={HiOutlineGlobe}
            />
            <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-4">
              <TextInput
                id="instagram"
                name="instagram"
                label="Instagram ID"
                autoComplete="off"
                icon={FiInstagram}
              />
              <TextInput
                id="facebook"
                name="facebook"
                label="Facebook ID"
                autoComplete="off"
                icon={FiFacebook}
              />
            </div>

            <Button
              label="Create my truck profile"
              type="submit"
              fullWidth
              loading={isSubmitting}
              disabled={!isValid || isSubmitting}
            />
          </FormControl>
        </FormProvider>
      </S.Content>

      <S.Preview>
        <Preview />
      </S.Preview>
    </S.Wrapper>
  );
}
