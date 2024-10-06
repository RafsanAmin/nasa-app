import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#47AFAB',
        secondary: '#A8EEE4',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        // Class name
        'grid-fluid-fit': (value) => {
          return {
            gridTemplateColumns: 'repeat(auto-fit, minmax(' + value + ', 1fr))', // Desired CSS properties here
            display: 'grid', // Just for example non-dynamic value
          };
        },
        'grid-fluid-fill': (value) => {
          return {
            gridTemplateColumns: 'repeat(auto-fill, minmax(' + value + ', 1fr))', // Desired CSS properties here
            display: 'grid', // Just for example non-dynamic value
          };
        },
      });
    }),
  ],
};
export default config;
