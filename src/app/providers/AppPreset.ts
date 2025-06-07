import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const AppPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f0faff',
      100: '#e0f4fe',
      200: '#b9eafe',
      300: '#7bdcfe',
      400: '#35cafb',
      500: '#0aa7db',
      600: '#0091ca',
      700: '#0174a3',
    },
    secondary: {
      50: '#faf6fe',
      100: '#f4ebfc',
      200: '#ebdafa',
      300: '#dbbcf6',
      400: '#c492ee',
      500: '#ae6e84',
      600: '#9b4cdd',
      700: '#8336ba',
    },
    neutral: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E1E1E1',
      400: '#CACACA',
      500: '#8E8E8E',
      600: '#4B4B4B',
      700: '#2C2B31',
    },
  },
});

export default AppPreset;
