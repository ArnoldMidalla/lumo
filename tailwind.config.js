/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        dmsans3: ["DMSans_300Light"],
        dmsans4: ["DMSans_400Regular"],
        dmsans5: ["DMSans_500Medium"],
        dmsans6: ["DMSans_600SemiBold"],
        dmsans7: ["DMSans_700Bold"],
        dmsans8: ["DMSans_800ExtraBold"],
      },
      colors: {
        background: "#f3f3f3"
      }
    },
  },
  plugins: [],
}