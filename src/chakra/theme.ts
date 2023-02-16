// 1. import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

// 2. call `extendTheme` and pass your custom values
export const theme = extendTheme({
    colors: {
        gray: {
            100: '#FF3C00',
        },
    },
    fonts: {
        heading: "Roboto",
        body: "Open Sans, sans-serif",
    },
    styles: {
        global: () => ({
            body: {
                bg: 'gray.200',
            },
        }),
    },
    components: {
        Button
    }
})