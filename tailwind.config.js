/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];

export const theme = {
  extend: {
    colors: {
      primary: "#764AF1",
      secondary: "#1E1926",
      gray: "#BAB2B5",
      blue: "#BADFE7",
      blue2: "#697184",
      pink: "#D8CFD0",
      hotpink: "#faeaff",
      bg: "#B1A6A4",
      bgDark: "#413F3D",
      background: "#F2F2F2",
      third: "#dc143c",
      five: "#fc9800",
      lightblue: "#0099ff",
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    }
  },

};

export const plugins = [];
