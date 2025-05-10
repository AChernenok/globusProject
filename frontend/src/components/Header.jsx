import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    Container,
    Link,
    Drawer,
    List,
    ListItem,
    IconButton,
    Skeleton,
    Grid,
    Menu,
    Paper,
    MenuItem,
    ListItemText,
    Alert,
    AlertTitle,
    ListItemButton,
    ListItemIcon,
    Divider,
    Collapse,
} from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import {
    AlternateEmail as AlternateEmailIcon,
    Phone as PhoneIcon,
    Telegram as TelegramIcon,
    Menu as MenuIcon,
    Close as CloseIcon,
    ChevronRight as ChevronRightIcon,
    ExpandLess,
    ExpandMore,
} from '@mui/icons-material'

import { GET_HEADER } from '../pages/api/queries';
import WeekIcon from '../../public/icons/WeekIcon';


import CallBackModal from './CallbackModal';
import LinkWrapper from './LinkWrapper';

const Header = () => {
    const { loading, data, error } = useQuery(GET_HEADER);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    // Button Services
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    // Callback Modal
    const [openModal, setOpenModal] = useState(false);

    if (loading) return (
        <>
            <AppBar
                position="static"
                color="inherit"
                elevation={0}
                sx={{
                    py: 1,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: 'grey.50',
                    boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)'
                }}
            >
                <Container sx={{ display: 'flex', justifyContent: 'space-around' }}>

                    <Skeleton variant='circular' width={40} height={40} />
                    <Skeleton
                        height={30}
                        sx={{
                            ml: 2,
                            width: { xs: '100px', sm: '200px' },
                        }}
                    />

                    {/* Центральный блок (скрыт на мобильных) */}
                    <Skeleton width="100%" height={30} sx={{ display: { xs: 'none', md: 'flex' }, maxWidth: 600 }} />



                    {/* Иконка для мобильного меню (видна только на xs) */}
                    <Skeleton
                        variant='circular'
                        width={30}
                        height={30}
                        sx={{
                            display: { md: 'none', xs: 'flex' },
                            ml: 'auto'
                        }}
                    />

                </Container>
            </AppBar >
        </>
    )

    if (error) return (
        <Container sx={{ my: 2 }}>
            <Box component='header'>
                <Alert variant='filled' severity='error'>
                    <AlertTitle>Ошибка</AlertTitle>
                    {error?.message}
                </Alert>
            </Box>
        </Container>
    )

    function parseTimeString(str) {
        // Ищем последнее вхождение цифры перед примечанием
        const timeEnd = str.match(/.*?\d(?=\D*$)/)?.[0]?.length || 0;

        return {
            timeRange: str.substring(0, timeEnd + 1).trim(),
            note: str.substring(timeEnd + 1).trim()
        };
    }

    const schedule = parseTimeString(data?.header?.schedule);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleHeaderServices = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleHeaderServicesClose = () => {
        setAnchorEl(null);
    };

    const handleCallbackModal = () => {
        setOpenModal(!openModal)
    }

    const handleMobileServicesOpen = () => {
        setMobileServicesOpen(!mobileServicesOpen);
    }

    return (
        <Box sx={{
            mb: {
                xs: 10,
                md: 0
            }
        }}>
            <CallBackModal open={openModal} onClose={() => setOpenModal(false)} />
            <AppBar
                position='fixed'
                color="inherit"
                elevation={0}
                sx={{
                    py: 1,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: 'grey.50',
                    boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',
                    width: '100%',
                }}
            >
                <Container>
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        <LinkWrapper href='/'>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mr: 4,
                                    justifyContent: 'space-around',
                                    textDecoration: 'none',
                                    '&:hover': {
                                        cursor: 'pointer'
                                    }
                                }}>
                                <Box
                                    component='img'
                                    loading='lazy'
                                    src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data?.header?.logo?.url}
                                    alt={data?.header?.title}
                                    sx={{
                                        height: 40,
                                        width: 'auto',
                                        mr: 2
                                    }}
                                />
                                <Typography
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontWeight: 700,
                                        color: 'text.primary'
                                    }}
                                >
                                    {data?.header?.title}
                                </Typography>
                            </Box>
                        </LinkWrapper>

                        {/* Меню для десктопа */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {data?.header?.menu.map((item) => (
                                item.url === '/uslugi' ? (
                                    <Box key={item.id}>
                                        <Button
                                            key={item.id}
                                            onClick={handleHeaderServices}
                                            variant='contained'
                                            color='error'
                                            sx={{
                                                mx: 1,
                                                fontWeight: 500,
                                                fontSize: { xs: '0.8rem', lg: '0.875rem' },
                                                '&:hover': {
                                                    color: 'white'
                                                },
                                            }}
                                            startIcon={<MenuIcon />}
                                        >
                                            {item.title}
                                        </Button>
                                        <Menu
                                            disableScrollLock
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleHeaderServicesClose}
                                            slotProps={{
                                                paper: {
                                                    sx: {
                                                        width: '100%',
                                                        maxWidth: '500px',
                                                        borderRadius: '8px',
                                                        mt: 1,
                                                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
                                                        '& .MuiPaper-root': {
                                                            overflow: 'hidden !important',
                                                            pr: 0
                                                        },
                                                        '& .MuiMenu-list': {
                                                            py: 0
                                                        },
                                                    }
                                                }
                                            }}>
                                            <Paper sx={{
                                                display: 'flex',
                                                width: '100%',
                                                flexDirection: 'column'
                                            }}>
                                                {data?.serviceCategories?.slice(0, 4).map((category) => (
                                                    <LinkWrapper
                                                        key={category?.documentId}
                                                        href={'/uslugi/' + category?.slug}>
                                                        <MenuItem
                                                            onClick={handleHeaderServicesClose}
                                                            sx={{
                                                                px: 2,
                                                                py: 1.5,
                                                                borderRadius: 1,
                                                                '&:hover': {
                                                                    bgcolor: 'action.hover'
                                                                }
                                                            }}>
                                                            <ListItemText
                                                                primary={
                                                                    category?.title.length >= 48
                                                                        ? category?.title.substring(0, 46) + '...'
                                                                        : category?.title
                                                                }
                                                                slotProps={{
                                                                    primary: {
                                                                        fontWeight: 500
                                                                    }
                                                                }}
                                                            />
                                                            <ChevronRightIcon color='action' />
                                                        </MenuItem>
                                                    </LinkWrapper>
                                                ))}
                                                <LinkWrapper href="/uslugi">
                                                    <Button
                                                        variant='contained'
                                                        onClick={handleHeaderServicesClose}
                                                        fullWidth
                                                        size='medium'
                                                    >
                                                        Полный список услуг
                                                    </Button>
                                                </LinkWrapper>
                                            </Paper>
                                        </Menu>
                                    </Box>

                                ) : (
                                    <LinkWrapper
                                        key={item.id}
                                        href={item.url}>
                                        <Button
                                            variant='text'
                                            color='text.primary'
                                            sx={{
                                                mx: 1,
                                                fontWeight: 500,
                                                fontSize: { xs: '0.8rem', lg: '0.875rem' },
                                                '&:hover': {
                                                    color: 'primary.main'
                                                },
                                            }}
                                        >
                                            {item.title}
                                        </Button>
                                    </LinkWrapper>
                                )
                            ))}
                            <Button
                                variant='contained'
                                color='info'
                                onClick={handleCallbackModal}
                                sx={{
                                    fontWeight: 500,
                                    fontSize: { xs: '0.8rem', lg: '0.875rem' },
                                }}
                            >Перезвоните мне</Button>
                        </Box>



                        {/* Кнопка мобильного меню */}
                        <IconButton
                            color="inherit"
                            aria-label="open menu"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                color: 'text.primary'
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container sx={{
                boxShadow: '0 10px 15px -5px rgba(0,0,0,0.3)',
                py: 2,
                mt: 10,
                display: { xs: 'none', md: 'block' },
                position: 'relative',
                zIndex: 2,
            }}>
                <Grid
                    container
                    spacing={2}
                    alignItems='center'
                    sx={{
                        '& .MuiSvgIcon-root': {
                            fontSize: '2.5rem',
                            color: 'error.main',
                            mr: 1
                        },
                        '& .MuiBox-root': {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        },
                        '& .MuiLink-root': {
                            display: 'flex',
                            flexDirection: 'column'
                        }
                    }}
                >
                    <Grid size={{ md: 3 }}>
                        <Box>
                            <WeekIcon />
                            <Box sx={{
                                flexDirection: 'column'
                            }}>
                                <Typography fontWeight='bold' variant='h4'>
                                    {schedule.timeRange}
                                </Typography>
                                <Typography variant='caption'>
                                    {schedule.note}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ md: 3 }}>
                        <Box>
                            <AlternateEmailIcon />
                            <Link href={`mailto:${data?.header?.email}`}>
                                <Typography fontWeight='bold'>
                                    {data?.header?.email}
                                </Typography>
                                <Typography variant='overline' textAlign='right'>
                                    {data?.header?.emailCaption}
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid size={{ md: 3 }}>
                        <Box>
                            <PhoneIcon />
                            <Link href={`tel:${data?.header?.phone}`}>
                                <Typography fontWeight='bold'>
                                    {data?.header?.phone}
                                </Typography>
                                <Typography variant='overline' textAlign='right'>
                                    {data?.header?.phoneCaption}
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid size={{ md: 3 }}>
                        <Box>
                            <TelegramIcon />
                            <Link
                                href={data?.header?.telegramLink}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Typography fontSize={'1.2rem'} fontWeight='bold'>
                                    TELEGRAM
                                </Typography>
                                <Typography variant='overline' textAlign='right'>
                                    {data?.header?.telegramCaption}
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Мобильное меню (Drawer) */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: {
                        width: '80%',
                        maxWidth: 300
                    }
                }}
            >
                <Box
                    sx={{
                        p: 2,
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                >
                    <IconButton onClick={handleDrawerToggle}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <List disablePadding>
                    {data?.header?.menu.map((item) => {
                        return item?.url === '/uslugi' ? (
                            <React.Fragment key={item?.id}>
                                <ListItem
                                    disablePadding
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'divider',
                                        bgcolor: 'error.main',
                                        color: 'primary.contrastText'
                                    }}
                                >
                                    <ListItemButton onClick={handleMobileServicesOpen}>
                                        <ListItemText primary={item?.title} />
                                        {mobileServicesOpen ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                </ListItem>
                                <Collapse in={mobileServicesOpen} timeout='auto' unmountOnExit>
                                    <List component='div' disablePadding>
                                        {data?.serviceCategories?.slice(0, 4).map((category) => (
                                            <LinkWrapper
                                                key={category?.documentId}
                                                href={`/uslugi/${category?.slug}`}
                                                onClick={() => { handleMobileServicesOpen(); handleDrawerToggle() }}
                                            >
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <ListItemText secondary={category?.title} />
                                                </ListItemButton>
                                            </LinkWrapper>
                                        ))}
                                        <LinkWrapper href={`/uslugi`}>
                                            <ListItemButton
                                                sx={{
                                                    pl: 4,
                                                    bgcolor: 'primary.main',
                                                    color: 'primary.contrastText'
                                                }}
                                                onClick={() => { handleMobileServicesOpen(); handleDrawerToggle() }}
                                            >
                                                <ListItemText primary='Все услуги' />
                                            </ListItemButton>
                                        </LinkWrapper>
                                    </List>
                                </Collapse>
                            </React.Fragment>
                        ) : (
                            <LinkWrapper
                                key={item.id}
                                href={item.url}>
                                <ListItem
                                    disablePadding
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'divider'
                                    }}
                                >
                                    <ListItemButton onClick={handleDrawerToggle}>
                                        <ListItemText primary={item?.title} />
                                    </ListItemButton>
                                </ListItem>
                            </LinkWrapper>
                        )
                    })}

                    {/* Контакты в мобильном меню */}
                    <ListItem disablePadding>
                        <ListItemButton component='a' href={`tel:${data?.header?.phone}`}>
                            <ListItemIcon>
                                <PhoneIcon sx={{ color: 'error.main' }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={data?.header?.phone}
                                sx={{
                                    color: 'primary.main',
                                    textDecoration: 'underline'
                                }}
                                slotProps={{
                                    primary: {
                                        variant: 'h4',
                                    }
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton component='a' href={`mailto:${data?.header?.email}`}>
                            <ListItemIcon>
                                <AlternateEmailIcon sx={{ color: 'error.main' }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={data?.header?.email}
                                sx={{
                                    color: 'primary.main',
                                    textDecoration: 'underline'
                                }}
                                slotProps={{
                                    primary: {
                                        variant: 'h4',
                                    }
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <WeekIcon sx={{ color: 'error.main' }} />
                        </ListItemIcon>
                        <ListItemText primary={data?.header?.schedule} />
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                        <ListItemButton onClick={() => { handleCallbackModal(); handleDrawerToggle() }}>
                            <ListItemText primary='Перезвоните мне' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
};

export default Header;