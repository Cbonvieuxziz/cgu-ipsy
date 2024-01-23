/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor : "#3b82f6", // Warning : change it in App.js & sendGroupMessageScreen & textInput & settingScreen & dropdown (setAppointment & Settings)
        secondaryColor: "#b0d2ff",//"#dbeafe", Warning : change it in settingScreen
        backgroundLightGray: "#F5F5F7"       
      },
      fontFamily: {
        'sans': ['Inter Pro', 'sans'],
      }
    } 
  },
  plugins: [],
}