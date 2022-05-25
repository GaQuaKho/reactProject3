module.exports = {
   mode: 'jit',
   purge: [
      './src/*.{js,jsx,ts,tsx,vue}',
      './src/**/*.{js,jsx,ts,tsx,vue}',
      './src/**/**/*.{js,jsx,ts,tsx,vue}',
      './src/**/**/**/*.{js,jsx,ts,tsx,vue}',
      './src/**/**/**/**/*.{js,jsx,ts,tsx,vue}',
      './src/**/**/**/**/**/*.{js,jsx,ts,tsx,vue}'
   ],
   content: [
      "./src/*.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/**/**/*.{js,jsx,ts,tsx}",
      "./src/**/**/**/*.{js,jsx,ts,tsx}",
      "./src/**/**/**/**/*.{js,jsx,ts,tsx}",
      "./src/**/**/**/**/**/*.{js,jsx,ts,tsx}"
   ],
   theme: {
      extend: {},
   },
   plugins: [],
}
