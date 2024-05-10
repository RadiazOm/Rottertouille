// tailwind.config.js

module.exports = {
    content: ["./App.{js,jsx,ts,tsx}",
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        colors: {
          primaryColor: "#F16060"
        },
        borderRadius: {
          'large': '20px'
        },
        extend: {},
    },
    plugins: [],
}