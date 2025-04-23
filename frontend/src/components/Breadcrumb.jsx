import { Stack, Breadcrumbs, Typography } from '@mui/material'
import { NavigateNext } from '@mui/icons-material'
import LinkWrapper from './LinkWrapper'

const Breadcrumb = ({ currentPage, slug }) => {

    const pageList = {
        'uslugi': 'Услуги',
        'o-kompanii': 'О компании',
        'portfolio': 'Портфолио',
        'kontakty': 'Контакты'
    }

    return (
        <Stack spacing={2} sx={{ py: 2 }}>
            <Breadcrumbs separator={<NavigateNext />} aria-label="Главная">
                <LinkWrapper href='/'>
                    <Typography
                        sx={{
                            color: 'primary.main'
                        }}>
                        Главная
                    </Typography>
                </LinkWrapper>
                {slug && (
                    <LinkWrapper href={`/${slug}`}>
                        <Typography
                            sx={{
                                color: 'primary.main'
                            }}>
                            {
                                pageList[slug]
                            }
                        </Typography>
                    </LinkWrapper>
                )}
                <Typography sx={{ color: 'text.primary' }}>{currentPage}</Typography>
            </Breadcrumbs>
        </Stack>
    )
}

export default Breadcrumb