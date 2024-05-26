// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [require('daisyui')],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // colors: {
      //   primary: '#003366',  // Dark Blue
      //   secondary: '#FFCC33',  // Yellow/Gold
      //   accent: '#F1F1F1',  // Light Gray
      //   neutral: '#FFFFFF',  // White
      //   'base-100': '#F1F1F1',  // Light Gray for backgrounds
      //   'base-content': '#003366',  // Dark Blue for text
      // },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#053b7b',  // Dark Blue
          'primary-focus': '#002b5c',  // Darker Blue for hover
          'primary-content': '#FFFFFF',  // Text on primary color

          'secondary': '#FFCC33',  // Yellow/Gold
          'secondary-focus': '#e6b800',  // Darker Yellow for hover
          'secondary-content': '#003366',  // Text on secondary color

          'accent': '#F1F1F1',  // Light Gray
          'accent-focus': '#e0e0e0',  // Darker Gray for hover
          'accent-content': '#003366',  // Text on accent color

          'neutral': '#FFFFFF',  // White
          'neutral-focus': '#f0f0f0',  // Slightly darker white for hover
          'neutral-content': '#003366',  // Text on neutral color

          'base-100': '#FFFFFF',  // Light Gray for background
          'base-200': '#e0e0e0',  // Slightly darker gray for background
          'base-300': '#cfcfcf',  // Even darker gray for background
          'base-content': '#003366',  // Dark Blue for text

          'info': '#1C7ED6',  // Blue for info messages
          'success': '#37D39B',  // Green for success messages
          'warning': '#FFCC33',  // Yellow/Gold for warning messages
          'error': '#E02424',  // Red for error messages
        },
      },
    ],
  },
};



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       // Enable backdrop filter utilities
//       backdropFilter: {
//         'none': 'none',
//         'md': 'blur(12px)',
//       },
//     },
//   },
//   plugins: [
//     require("daisyui") // DaisyUI plugin // Tailwind CSS Filters plugin (if you're using Tailwind CSS v2)
//   ],
//   daisyui: {
//     themes: [
//       "light",
//       "dark",
//       "cupcake",
//       "bumblebee",
//       "emerald",
//       "corporate",
//       "synthwave",
//       "retro",
//       "cyberpunk",
//       "valentine",
//       "halloween",
//       "garden",
//       "forest",
//       "aqua",
//       "lofi",
//       "pastel",
//       "fantasy",
//       "wireframe",
//       "black",
//       "luxury",
//       "dracula",
//       "cmyk",
//       "autumn",
//       "business",
//       "acid",
//       "lemonade",
//       "night",
//       "coffee",
//       "winter",
//       "dim",
//       "nord",
//       "sunset",
//       {
//         name: 'mytheme', // Specify the custom theme name here
//         theme: {
//           // Define your custom theme colors and settings
//           "primary": "#053b7b",
//           "secondary": "#FFCC33",
//           "accent": "#F1F1F1",
//           "neutral": "#1e201b",
//           "base-100": "#f7fcff",
//           "info": "#008cf2",
//           "success": "#009c49",
//           "warning": "#facc15",
//           "error": "#991b1b",
//         },
//       },
//     ],
//   },
// };