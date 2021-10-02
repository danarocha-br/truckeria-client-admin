import * as React from 'react';

import Switch from 'react-switch';

import tokens from '../../../tailwind.config';
import useDarkMode from 'use-dark-mode';

const SwitchCustom = () => {
  const darkMode = useDarkMode(true);

  return (
    <Switch
      onChange={darkMode.toggle}
      checked={darkMode.value}
      aria-label="Theme Switcher"
      checkedIcon={false}
      uncheckedIcon={false}
      handleDiameter={20}
      offColor={tokens.theme.colors.neutral[700]}
      onColor="#fff"
      offHandleColor={tokens.theme.colors.neutral[700]}
      onHandleColor="#fff"
      height={60}
      width={60.01}
      borderRadius={0}
      activeBoxShadow={'0 0 2px 3px #ffffff0'}
      uncheckedHandleIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      }
      checkedHandleIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      }
    />
  );
};

export default SwitchCustom;
