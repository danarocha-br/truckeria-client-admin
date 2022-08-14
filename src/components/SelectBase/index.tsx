//@ts-noCheck
import React, { forwardRef, useCallback, useState } from 'react';
import { CSS } from '@stitches/react';
import makeAnimated from 'react-select/animated';
import {
  components,
  DropdownIndicatorProps,
  GroupBase,
  MenuProps,
  MultiValueGenericProps,
  NoticeProps,
  OptionsOrGroups,
} from 'react-select';
import { TriangleDownIcon } from '@radix-ui/react-icons';

import { Icon, iconPath } from '../Icon';
import { Flex } from '../Flex';
import { Spinner } from '../Spinner';
import * as S from './styles';
import { Text } from '../Text';
import { Box } from '../Box';

import { config } from '../../../stitches.config';

export type SelectProps = {
  label?: string;
  id?: string;
  name: string;
  isMulti?: boolean;
  isClearable?: boolean;
  options: OptionsOrGroups<GroupBase<string>> | undefined;
  defaultValue?: string;
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  hasValue?: boolean;
  icon?: keyof typeof iconPath;
  errors?: any | undefined;
  css?: CSS<typeof config>;
} & React.InputHTMLAttributes<HTMLSelectElement>;

type Ref = HTMLSelectElement | null;

export const Select = forwardRef<Ref, SelectProps>(
  (
    {
      id,
      name,
      icon,
      defaultValue,
      label,
      placeholder,
      disabled = false,
      loading = false,
      readOnly = false,
      hasValue = false,
      errors,
      options,
      isClearable = true,
      isMulti = false,
      css,
      ...props
    },
    ref
  ) => {
    /**
     * Get UI States
     */
    const [hasFocus, setFocus] = useState(false);

    const handleInputFocus = useCallback(() => {
      setFocus(true);
    }, [setFocus]);

    const handleInputBlur = useCallback(() => {
      if (!hasValue) {
        setFocus(false);
      }
    }, [setFocus, hasValue]);

    const areErrorsEmpty = !!errors && Object.keys(errors).length === 0;

    const DropdownIndicator = (props: DropdownIndicatorProps) => (
      <components.DropdownIndicator {...props}>
        <Box
          className="c-input__dropdown-indicator"
          css={{ transform: 'scale(1.2)' }}
        >
          <TriangleDownIcon />
        </Box>
      </components.DropdownIndicator>
    );

    const MultiValueContainer = ({
      children,
      ...props
    }: MultiValueGenericProps) => (
      <components.MultiValueContainer {...props}>
        <Box
          css={{
            d: 'inline-flex',
            borderRadius: 3,
            h: 'auto',
            bg: '$transparent !important',
            border: '1px solid $brand',
            mr: '$2',
            pb: 2,
          }}
        >
          {children}
        </Box>
      </components.MultiValueContainer>
    );

    const Menu = (props: MenuProps) => {
      return (
        <components.Menu {...props}>
          <Box>{props.children}</Box>
          {/* {buttonLabel && (
            <S.ActionMenuButton onClick={onAction} type="button">
              <Icon name={actionIcon} color="current" />
              {buttonLabel}
            </S.ActionMenuButton>
          )} */}
        </components.Menu>
      );
    };

    const LoadingIndicator = () => <Spinner size="xs" />;

    const NoOptionsMessage = (props: NoticeProps) => {
      return (
        <components.NoOptionsMessage {...props}>
          <Text as="p" color="subdued" align="center" css={{ py: '$2' }}>
            Não encontramos o item desejado.
          </Text>
        </components.NoOptionsMessage>
      );
    };

    const animatedComponents = makeAnimated({
      Menu,
      NoOptionsMessage,
      DropdownIndicator,
      MultiValueContainer,
      LoadingIndicator,
    });

    return (
      <Flex direction="column" fullWidth css={{ borderRadius: '$xs', ...css }}>
        <S.Container
          isFocused={hasFocus}
          hasError={!!errors && !areErrorsEmpty ? true : false}
          isDisabled={disabled}
          isLoading={loading}
          readOnly={readOnly}
          hasValue={hasValue || !!placeholder}
        >
          <S.SelectInput
            classNamePrefix="c-select"
            name={name}
            id={name || id}
            aria-label={label}
            placeholder={placeholder}
            //@ts-ignore
            ref={ref}
            closeMenuOnSelect={true}
            components={animatedComponents}
            loadingMessage={() => `Aguarde ...`}
            isMulti={isMulti}
            isClearable={isClearable}
            isDisabled={disabled || loading}
            isLoading={loading}
            options={options}
            hasPlaceholder={!!placeholder}
            hasFocus={hasFocus}
            hasError={!!errors && !areErrorsEmpty ? true : false}
            readOnly={readOnly}
            {...props}
            defaultValue={defaultValue}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />

          <S.Label
            aria-labelledby={label}
            htmlFor={name}
            isDisabled={disabled || loading}
            hasValue={hasValue || !!placeholder}
            hasFocus={hasFocus}
            hasIcon={!!icon}
            hasPlaceholder={!!placeholder}
            css={{
              pointerEvents: 'none',
              zIndex: 0,
              overflow: 'hidden',
            }}
          >
            {!!icon && <Icon className="c-input__icon" name={icon} />}
            <span className="c-input__label">{label}</span>

            {!!errors && !areErrorsEmpty && (
              <Icon
                name="alert"
                className="c-input__error-icon"
                css={{ position: 'absolute', right: '$4' }}
              />
            )}
          </S.Label>
        </S.Container>
      </Flex>
    );
  }
);
