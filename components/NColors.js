// NColors.js

import React from 'react';

const NColorsContext = React.createContext();

export const NColorsProvider = ({ children }) => {
  const NColors = {
    primary: '#003893',
    secondary: '#dc143c',
    accent: '#3280FE',
    gradientFirst: '#2B2BA1',
    gradientSecond: '#9393F6',
    textPrimary: '#333333',
    greyColor: '#6C757D',
    textSecondary: '#dc143c',
    textWhite: '#FFFFFF',
    lightRed: '#FFCDD2',
    light: '#F6F6F6',
    dark: '#272727',
    primaryBackground: '#F3F3F3',
    lightContainer: '#F6F6F6',
    darkContainer: 'rgba(255, 255, 255, 0.1)',
    buttonPrimary: '#dc143c',
    buttonSecondary: '#6C757D',
    buttonDisabled: '#C4C4C4',
    borderPrimary: '#dc143c',
    borderSecondary: '#E6E6E6',
    error: '#D32F2F',
    success: '#388E3C',
    warning: '#F57C00',
    info: '#1976D2',
    iconBg: '#fef3ed',
    black: '#232323',
    darkerGrey: '#4F4F4F',
    darkGrey: '#939393',
    grey: '#E0E0E0',
    softGrey: '#F4F4F4',
    lightGrey: '#F9F9F9',
    white: '#FFFFFF',
  };

  return (
    <NColorsContext.Provider value={NColors}>
      {children}
    </NColorsContext.Provider>
  );
};

export const useNColors = () => {
  const colors = React.useContext(NColorsContext);
  if (!colors) {
    throw new Error('useNColors must be used within a NColorsProvider');
  }
  return colors;
};
