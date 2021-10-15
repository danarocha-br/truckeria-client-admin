/* eslint-disable react/no-unescaped-entities */
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
import * as Yup from 'yup';
// import { HiOutlineMail, HiOutlinePhone, HiOutlineGlobe } from 'react-icons/hi';
// import { FiInstagram, FiFacebook } from 'react-icons/fi';
import axios from 'axios';

import TextInput from 'components/TextInput';
import Textarea from 'components/Textarea';
import Select from 'components/Select';
import FormControl from 'components/FormControl';
import Button from 'components/Button';
import Steps from 'components/Steps';

import * as S from './styles';
import Logo from 'components/Logo';
import Preview from './Preview';

import { FOOD_TYPE_OPTIONS } from 'constants/index';

type Cities = {
  data: {
    nome: string;
  }[];
};

type States = {
  data: {
    nome?: string;
    sigla: string;
  }[];
};

type Cuisine = {
  label: string;
  value: string;
};

export type FormData = {
  files?: string[];
  name: string;
  description: string;
  cuisines: Cuisine[];
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
  description: '',
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
  description: Yup.string()
    .required('Please describe your food-truck.')
    .min(5, 'Description must have at least 5 characters.'),
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
  files: Yup.array(),
  state: Yup.object()
    .shape({
      label: Yup.string().required('Please choose your state.'),
      value: Yup.string().required('Please choose your state.'),
    })
    .required('Please choose your state.'),
});

export default function TruckSetup() {
  const router = useRouter();
  const [stateInitials, setStateInitials] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const mountedRef = useRef(true);

  const methods = useForm<FormData>({
    defaultValues: { ...initialValues },
    mode: 'all',
    resolver: yupResolver<Yup.AnyObjectSchema>(TruckSetupSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = methods;

  const selectedState = useWatch({
    control,
    name: 'state',
    defaultValue: '',
  });

  // get state list
  const handleStateList = useCallback(() => {
    try {
      axios
        .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then((response: States) => {
          const stateInitials = response.data.map((initial) => initial.sigla);

          if (!mountedRef.current) return null;
          setStateInitials(stateInitials);
        });
    } catch (error) {
      console.log(error);
    }
  }, [mountedRef]);

  useEffect(() => {
    handleStateList();
    return () => {
      mountedRef.current = false;
    };
  }, [handleStateList]);

  // get city list
  const handleCityList = useCallback(() => {
    try {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState.value}/municipios`
        )
        .then((response: Cities) => {
          const cityNames = response.data.map((city) => city.nome);

          if (!mountedRef.current) return null;
          setCities(cityNames);
        });
    } catch (error) {
      console.log(error);
    }
  }, [mountedRef, selectedState]);

  useEffect(() => {
    handleCityList();
    return () => {
      mountedRef.current = false;
    };
  }, [handleCityList]);

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
        <Logo symbolOnly className="mb-6 md:fixed md:left-8" />

        <div className="w-full md:w-2/3 mb-12">
          <Steps
            steps={[
              {
                label: 'Basic info',
                to: '/',
                isActive: true,
              },
              {
                label: 'Contact info',
                to: '/',
              },
            ]}
          />
        </div>

        <p className="text-center md:text-left text-lg opacity-50 mb-8 mt-2">
          Tell your customers as much as possibile about your food truck!
        </p>

        <FormProvider {...methods}>
          <FormControl onSubmit={handleSubmit(onSubmit)} className="md:px-32">
            <TextInput
              id="name"
              name="name"
              label="Your food truck name"
              autoComplete="off"
              loading={isSubmitting}
            />
            <Textarea
              id="description"
              name="description"
              label="Describe a bit about your truck"
              autoComplete="off"
              loading={isSubmitting}
            />
            <Select
              id="cuisines"
              name="cuisines"
              label="Select a cuisine type"
              options={FOOD_TYPE_OPTIONS}
              loading={isSubmitting}
              isMulti
              isClearable
            />

            <Select
              id="state"
              name="state"
              label="Select a state"
              placeholder=""
              options={
                stateInitials &&
                stateInitials.map((state) => {
                  return { key: state, value: state, label: state };
                })
              }
              loading={isSubmitting}
            />
            {selectedState && (
              <Select
                id="city"
                name="city"
                label="Select a city"
                options={
                  cities &&
                  cities.map((city) => {
                    return { key: city, value: city, label: city };
                  })
                }
                loading={isSubmitting}
              />
            )}

            {/* <TextInput
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
            </div> */}

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
        <Preview control={control} />
      </S.Preview>
    </S.Wrapper>
  );
}
