import Header from "./Header";
import Footer from "./Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    typography: {
        fontSize: 14,
        h1: {
            fontSize: '2.875rem',
            lineHeight: '3.25rem',
            fontWeight: 900
        },
        h2: {
            fontSize: '2.25rem',
            lineHeight: '2.625rem',
            fontWeight: 700
        },
        h3: {
            fontSize: '1.5rem',
            lineHeight: '1.75rem',
            fontWeight: 700
        },
        h4: {
            fontSize: '1.125rem',
            lineHeight: '1.3rem',
            fontWeight: 700
        },
        h5: {
            fontSize: '1rem',
            lineHeight: '1.3rem',
            fontWeight: 400
        },
        h6: {
            fontSize: '.75rem',
            lineHeight: '.7rem'
        }
    }
})

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <section>{children}</section>
            <Footer />
        </ThemeProvider>
    )
}

export default Layout