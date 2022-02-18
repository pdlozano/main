module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "media",
    theme: {
        colors: {
            main: {
                300: "#96d6ff",
                600: "#0197f6",
            },
            gray: "#111111",
            white: "#f4f4f4",
            black: "#191919",
            yellow: {
                300: "#fee39a",
                600: "#fcba04",
            },
            red: {
                600: "#bf1a2f",
                800: "#a21629",
            },
            blue: {
                300: "#73b8bf",
                600: "#4da1a9",
            },
            green: "#018e42",
            pink: "#f00699",
        },
        fontFamily: {
            header: ['"Open Sans"', "sans-serif"],
            body: ['"Roboto Mono"', "monospace"],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
