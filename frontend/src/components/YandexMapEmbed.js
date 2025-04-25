import { Box, Typography } from '@mui/material';

export const YandexMapEmbed = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: 500,
                borderRadius: 2,
                boxShadow: 3,
                '& iframe': {
                    border: 'none', // Убираем стандартную границу
                },
            }}
        >
            {/* Скрытые SEO-ссылки (видны при наведении) */}
            <Typography
                component="a"
                href="https://yandex.ru/maps/org/bk_okna_globus/224228164853/?utm_medium=mapframe&utm_source=maps"
                sx={{
                    color: 'text.disabled',
                    fontSize: 12,
                    position: 'absolute',
                    top: 0,
                    zIndex: 1,
                    opacity: 0,
                    '&:hover': { opacity: 1 },
                }}
            >
                БК Окна Глобус
            </Typography>

            <Typography
                component="a"
                href="https://yandex.ru/maps/213/moscow/category/windows/184107727/"
                sx={{
                    color: 'text.disabled',
                    fontSize: 12,
                    position: 'absolute',
                    top: 14,
                    zIndex: 1,
                    opacity: 0,
                    '&:hover': { opacity: 1 },
                }}
            >
                Окна в Москве
            </Typography>

            {/* Основной iframe с картой */}
            <Box
                component="iframe"
                src="https://yandex.ru/map-widget/v1/?ll=37.599911%2C55.880182&mode=search&oid=224228164853&ol=biz&z=16.55"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy" // Ленивая загрузка
            />
        </Box>
    );
};