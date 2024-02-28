const defaultTheme = require("tailwindcss/defaultTheme");

const generateSpacing = (pixelsBase, values) => {
  return values.reduce((acc, v) => {
    acc[`${v.toString().replace(".", "_")}`] = `${(
      pixelsBase *
      v *
      0.1
    ).toFixed(1)}rem`;
    return acc;
  }, {});
};
// Will generate font sizes values with "rem" as unit
const generateFontSizes = (values) => {
  return values.reduce((acc, v) => {
    acc[v] = `${(v * 0.1).toFixed(1)}rem`;
    return acc;
  }, {});
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      sans: ["IM Fell DW Pica", ...defaultTheme.fontFamily.sans],
    },
    spacing: generateSpacing(
      8,
      [
        0, 0.25, 0.5, 1, 1.25, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11,
        12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 40, 48, 55,
      ],
    ),
    fontSize: generateFontSizes([
      9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 23, 24, 25, 26, 28, 30, 32,
      35, 36, 40, 42, 48, 50, 52, 55, 56, 64, 72, 80, 88, 96, 128,
    ]),
    extend: {
      colors: {
        "lp-camel": "#D4C9B1",
        "lp-green": "#64684A",
        "lp-white": "#F6EFE0",
        "lp-grey-blue": "#434852",
        "lp-grey-green": "#242721",
        "lp-green-light": "#B6B9A2",
        "lp-grey": "#969BA6",
      },
    },
  },
  safelist: ["text-11", "lg:text-15"],
  plugins: [],
};
