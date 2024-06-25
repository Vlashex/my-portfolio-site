"use client"
import { ThemeOptions, createTheme } from "@mui/material"

const themeOptions : ThemeOptions = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1440, 
        }
    },
    palette: {
        primary: {
            light: '#808080',
            main: '#1e1e1e'
        },
        secondary: {
            main: '#FF8A49'
        }
    },
    typography: {
        h1: {
            fontSize: '60px'
        },
        h2: {
            fontSize: '44px'
        },
        h3: {
            fontSize: '32px'
        },
        body1: {
            fontSize: '24px'
        },
        body2: {
            fontSize: '16px'
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
            styleOverrides: {
                    root: {
                        ":hover": {
                            textDecoration: 'underline'
                        }
                    }
                }
        },
        MuiContainer: {
            defaultProps: {
                disableGutters: true,
            },
            styleOverrides: {
                root: {
                    p: '10px',
                    maxWidth: '1170px'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                }
            },
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained',
            },
            styleOverrides: {
                root: {
                    fontSize: '16px',
                    p: '14px 50px',
                    textWrap: 'nowrap',
                    textTransform: 'none'
                }
            },

            variants: [
                {
                    props: { variant: 'text' },
                    style: {
                        textTransform: 'none',
                        color: 'none',

                        ":hover": {
                            color: '#C377E1',
                            background: 'none'
                        }
                    }
                },
                {
                    props: { variant: 'contained' },
                    style: {
                        textTransform: 'none',
                        borderRadius: '16px'
                    }
                },
                {
                    props: { variant: 'contained', size: 'medium' },
                    style: {
                        textTransform: 'none',
                        borderRadius: '25px !important'
                    }
                },
            ]
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    padding: '10px'
                }
            }
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                }
            }
        },
    }
}

export const baseTheme = createTheme(themeOptions)