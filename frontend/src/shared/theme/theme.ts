import { MantineThemeOverride } from '@mantine/core';

const landingPageLightTheme: MantineThemeOverride = {
    colorScheme: 'light',
    fontFamily: 'futura',
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 22,
    },
    headings: {
        fontFamily: 'futura',
        fontWeight: 400,
        sizes: {
            h1: { fontWeight: 400, fontSize: 32, lineHeight: 1.4 },
            h2: { fontWeight: 400, fontSize: 30, lineHeight: 1.5 },
            h3: { fontWeight: 400, fontSize: 28, lineHeight: 1.5 },
            h4: { fontWeight: 400, fontSize: 26, lineHeight: 1.5 },
            h5: { fontWeight: 400, fontSize: 24, lineHeight: 1.5 },
            h6: { fontWeight: 400, fontSize: 22, lineHeight: 1.5 },
        },
    },
    colors: {
        main: ['#004488', '#DDAA33', '#BB5566', '#FFFFFF', '#2F2F2F'],
    },
};

const landingPageLightWithLargeFontsizeTheme: MantineThemeOverride = {
    colorScheme: 'light',
    fontFamily: 'futura',
    fontSizes: {
        xs: 16,
        sm: 18,
        md: 20,
        lg: 24,
        xl: 26,
    },
    headings: {
        fontFamily: 'futura',
        fontWeight: 900,
        sizes: {
            h1: { fontSize: 36, lineHeight: 1.4 },
            h2: { fontSize: 34, lineHeight: 1.5 },
            h3: { fontSize: 32, lineHeight: 1.5 },
            h4: { fontSize: 30, lineHeight: 1.5 },
            h5: { fontSize: 28, lineHeight: 1.5 },
            h6: { fontSize: 26, lineHeight: 1.5 },
        },
    },
    colors: {
        main: ['#004488', '#DDAA33', '#BB5566', '#FFFFFF', '#2F2F2F'],
    },
};

const landingPageDarkTheme: MantineThemeOverride = {
    colorScheme: 'dark',
    fontFamily: 'futura',
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 22,
    },
    headings: {
        fontFamily: 'futura',
        fontWeight: 400,
        sizes: {
            h1: { fontWeight: 400, fontSize: 32, lineHeight: 1.4 },
            h2: { fontWeight: 400, fontSize: 30, lineHeight: 1.5 },
            h3: { fontWeight: 400, fontSize: 28, lineHeight: 1.5 },
            h4: { fontWeight: 400, fontSize: 26, lineHeight: 1.5 },
            h5: { fontWeight: 400, fontSize: 24, lineHeight: 1.5 },
            h6: { fontWeight: 400, fontSize: 22, lineHeight: 1.5 },
        },
    },
    colors: {
        main: ['#004488', '#DDAA33', '#BB5566', '#2F2F2F', '#FFFFFF'],
    },
};

const landingPageDarkWithLargeFontsizeTheme: MantineThemeOverride = {
    colorScheme: 'dark',
    fontFamily: 'futura',
    fontSizes: {
        xs: 16,
        sm: 18,
        md: 20,
        lg: 24,
        xl: 26,
    },
    headings: {
        fontFamily: 'futura',
        fontWeight: 900,
        sizes: {
            h1: { fontSize: 36, lineHeight: 1.4 },
            h2: { fontSize: 34, lineHeight: 1.5 },
            h3: { fontSize: 32, lineHeight: 1.5 },
            h4: { fontSize: 30, lineHeight: 1.5 },
            h5: { fontSize: 28, lineHeight: 1.5 },
            h6: { fontSize: 26, lineHeight: 1.5 },
        },
    },
    colors: {
        main: ['#004488', '#DDAA33', '#BB5566', '#2F2F2F', '#FFFFFF'],
    },
};

export {
    landingPageLightTheme,
    landingPageDarkTheme,
    landingPageDarkWithLargeFontsizeTheme,
    landingPageLightWithLargeFontsizeTheme,
};
