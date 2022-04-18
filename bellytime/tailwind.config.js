module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
//https://merrily-code.tistory.com/169#:~:text=%F0%9F%9B%A0%20Tailwind%20CSS%EC%9D%98%20%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8%20%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0%2C%20tailwind%2Dscrollbar%2Dhide&text=%EB%B0%94%EB%A1%9C%20%EC%9D%B4%EB%9F%B4%20%EB%95%8C%20%ED%85%8C%EC%9D%BC%EC%9C%88%EB%93%9C,%EB%A5%BC%20%EC%88%A8%EA%B8%B8%20%EC%88%98%20%EC%9E%88%EA%B2%8C%20%EB%90%A9%EB%8B%88%EB%8B%A4.