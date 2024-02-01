/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'Home_Desktop': "url('/assets/Home_Desktop.png')", // Update the path as needed
      'Forgot_Desktop': "url('/assets/Forgot_Desktop.png')",
      'Signup_Desktop': "url('/assets/Signup_Desktop.png')",
      'Login_Desktop': "url('/assets/Login_Desktop.png')",
      'Contact_Desktop':"url('/assets/Contact_Desktop.png')",
      'About_Desktop':"url('/assets/About_Desktop.png')",
      "Btn":"url('/assets/rectangle.png')",
      'Img':"url('/assets/Vector_image.png')",
      'Img':"url('/assets/freepic_image.png')",
    },
  },
  plugins: [],
};
