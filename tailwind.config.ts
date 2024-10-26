import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-reports":
          "linear-gradient(to bottom, #14367B 0%, #67CCD1 100%)",
        "gradient-medical":
          "linear-gradient(to bottom, #147B6F 0%, #67CCD1 100%)",
        "gradient-doctors":
          "linear-gradient(to bottom, #4D8DC8 0%, #AA68FF 100%)",
      },

      colors: {
        //backgrounds
        lightBg: "#F6F8FF",
        blueBg: "#0E2249",
        blueBgTwo: "#14367B",
        lightBlueBg: "#ECF1FC",
        lightBlueBgTwo: "#E8EFFB",
        lightBlueBgThree: "#E2ECF7",
        disbaledTextBoxBg: "#90a9ce",
        sidebarFillBg: "#EFF6FF",
        inputBg: "#F5F8FC",
        dashbordIconBg: "#F0F5FB",
        greenishBlueBg: "#62c8d6",
        greenBlueBg: "#d7eff8",

        //texts
        headerText: "#262E34",
        labelText: "#4A4844",
        buttonText: "#FFFFFF",
        blueText: "#14367B",
        lightBlueText: "#1582B5",
        sidebarText: "#1A8DC2",
        darkText: "#262E34",
        disabledText: "#CACACA",
        inputText: "#808080",
        lightText: "#7F7F7F",
        grayText: "#545454",
        grayLightText: "#989898",
        greenText: "67CCD1",

        //buttons
        buttonPrimary: "#14367B",
        buttonPrimaryHover: "#102b62",
        buttonSecondary: "#DADCDC",
        btnConfirmBg: "#16A34A",
        btnConfirmHover: "#15803D",
        btnDanger: "#E33737",
        btnDisabled: "#445d96",

        //colors
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
