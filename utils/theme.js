import {createMuiTheme} from "@material-ui/core/styles";
import React from "react";

const stdTheme = {
    typography: {
        //fontFamily: 'Roboto Mono, monospace'
        fontFamily: 'Roboto, sans-serif'
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    scrollBehavior: 'smooth'
                },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 630,
            md: 1048,
            lg: 1280,
            xl: 1920,
        }
    },
    palette: {
        primary: {
            main: 'rgb(0,0,0)',
        },
        secondary: {
            main: 'rgb(60,60,60)'
        },
        text: {
            primary: '#fff',
            secondary: 'rgb(175,175,175)',
            primaryBlack: '#000',
            secondaryBlack: 'rgb(45,45,45)'
        },
        background: {
            default: '#fff',
            paper: 'rgb(245,245,245)'
        }
    }
};

export const getTheme = () => {
    const theTheme = createMuiTheme(stdTheme);
    addTypographyOnTheme(theTheme);

    return theTheme;
};

function addTypographyOnTheme(theme){
    theme.typography.h1 = {
        fontWeight: 400,
        fontSize: '4em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3em',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2em',
        },
    };

    theme.typography.h2 = {
        fontWeight: 300,
        fontSize: '2.5em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2em',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5em',
        },
    };
    theme.typography.h3 = {
        fontWeight: 400,
        fontSize: '2em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5em',
        },
    };
    theme.typography.body1 = {
        fontWeight: 300,
    };
}