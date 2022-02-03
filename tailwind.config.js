module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "media",
    theme: {
        colors: {
            main: {
                300: "#96d6ff",
                600: "#0197f6"
            },
            gray: "#111111",
            white: "#f4f4f4",
            black: "#191919"
        },
        fontFamily: {
            header: ['"Open Sans"', 'sans-serif'],
            body: ['"Roboto Mono"', 'monospace'],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
