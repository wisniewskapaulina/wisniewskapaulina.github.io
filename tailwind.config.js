module.exports = {
purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '6/7': '90%',
      },
      colors: {
        lavender: '#E5D4Ed',
        blueBell: `#999CC2`,
        nude: `#feeafa`,
        purpl: `#d8bbff`,
        turq: `#09b8d6`,
        turqLight: `#e0f9fe`,
      },
      minHeight: {
        "1/2" : "50%",
        "3/4" : "75%",
      },
      fontFamily: {
        myFont: ['Kaushan Script'],
      },
      animation: {
        wiggle: 'wiggle 7s ease-in-out infinite',
        pulse: 'pulse 6s ease-in-out infinite',
       },
       keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
       },
    },

  },
  variants: {},
  plugins: [],
}
