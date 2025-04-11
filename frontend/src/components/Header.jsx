import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    Container,
    Link,
    Stack,
    Drawer,
    List,
    ListItem,
    IconButton,
    Skeleton,
    Grid,
    Menu,
    Tabs,
    Paper,
    Tab,
    MenuItem,
    ListItemText,
} from '@mui/material';
import { useState } from 'react';
import { GET_HEADER } from '../queries';
import { useQuery } from '@apollo/client';
import { Link as RouterLink, useLocation } from 'react-router-dom'
import WeekIcon from '../assets/icons/WeekIcon';
import {
    AlternateEmail as AlternateEmailIcon,
    Phone as PhoneIcon,
    Telegram as TelegramIcon,
    Menu as MenuIcon,
    Close as CloseIcon,
    ChevronRight as ChevronRightIcon,
} from '@mui/icons-material'
import CallBackModal from './CallbackModal';

const Header = () => {
    const { loading, data, error } = useQuery(GET_HEADER);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { pathname } = useLocation();
    // Button Services
    const [anchorEl, setAnchorEl] = useState(null);
    const [tabValue, setTabValue] = useState(0);
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

    if (error) return <div>Ошибка: {error}</div>

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

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    }

    const handleCallbackModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <>
            <CallBackModal open={openModal} onClose={() => setOpenModal(false)} />
            <AppBar
                position="static"
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
                        <Box
                            component={RouterLink}
                            to='/'
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mr: 4,
                                textDecoration: 'none'
                            }}>
                            <Box
                                component="img"
                                src={import.meta.env.VITE_URL + data?.header?.logo?.url}
                                alt={data?.header?.logo?.caption}
                                sx={{
                                    height: 40,
                                    width: 'auto',
                                    mr: 2
                                }}
                            />
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    fontWeight: 700,
                                    color: 'text.primary'
                                }}
                            >
                                {data?.header?.title}
                            </Typography>
                        </Box>

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
                                        >
                                            <MenuIcon sx={{ pr: 3 }} />
                                            {item.title}
                                        </Button>
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleHeaderServicesClose}
                                            PaperProps={{
                                                sx: {
                                                    width: '100%',
                                                    maxWidth: '800px',
                                                    borderRadius: '8px',
                                                    mt: 1,
                                                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)'
                                                }
                                            }}>
                                            <Paper sx={{ display: 'flex', width: '100%' }}>
                                                <Tabs
                                                    value={tabValue}
                                                    orientation='vertical'
                                                    variant='scrollable'
                                                    onChange={handleTabChange}
                                                    sx={{
                                                        borderBottom: 1,
                                                        borderColor: 'divider',
                                                        minWidth: 200
                                                    }}>

                                                    {data?.serviceCategories.map((item) => (
                                                        <Tab
                                                            key={item.documentId}
                                                            label={item.title}
                                                            sx={{
                                                                alignItems: 'flex-start'
                                                            }}
                                                        />
                                                    ))}
                                                </Tabs>
                                                <Box sx={{
                                                    flex: 1,
                                                    p: 2,
                                                    overflow: 'auto',
                                                    maxHeight: '65vh'
                                                }}>
                                                    {data?.serviceCategories?.[tabValue]?.services?.map((service) => (
                                                        <MenuItem
                                                            key={service.documentId}
                                                            component={RouterLink}
                                                            to={'/uslugi/' + service.slug}
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
                                                                primary={service.title}
                                                                primaryTypographyProps={{ fontWeight: 500 }} />
                                                            <ChevronRightIcon color='action' />
                                                        </MenuItem>
                                                    ))}
                                                </Box>
                                            </Paper>
                                        </Menu>
                                    </Box>

                                ) : (
                                    <Button
                                        key={item.id}
                                        to={item.url}
                                        component={RouterLink}
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
                                )
                            ))}
                            <Button
                                variant='text'
                                color='text.primary'
                                sx={{
                                    mx: 1,
                                    fontWeight: 500,
                                    fontSize: { xs: '0.8rem', lg: '0.875rem' },
                                    '&:hover': {
                                        color: 'primary.main',
                                    }
                                }}
                            >Цены</Button>
                            <Button
                                variant='text'
                                color='text.primary'
                                sx={{
                                    mx: 1,
                                    fontWeight: 500,
                                    fontSize: { xs: '0.8rem', lg: '0.875rem' },
                                    '&:hover': {
                                        color: 'primary.main'
                                    }
                                }}
                            >FAQ</Button>
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
                display: { xs: 'none', md: pathname === '/' && 'block' },
                position: 'relative',
                zIndex: 2
            }}>
                <Grid container spacing={2} alignItems='center'>
                    <Grid size={{ md: 3 }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <WeekIcon sx={{
                                fontSize: '2.5rem',
                                color: '#f44346',
                                mr: 1
                            }} />
                            <Box textAlign='right'>
                                <Typography fontWeight='bold' variant='h6'>
                                    {schedule.timeRange}
                                </Typography>
                                <Typography variant='caption'>
                                    {schedule.note}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ md: 3 }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <AlternateEmailIcon sx={{
                                fontSize: '2.5rem',
                                color: '#f44346',
                                mr: 1
                            }} />
                            <Link href={'mailto:' + data?.header?.email} sx={{
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
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
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <PhoneIcon sx={{
                                fontSize: '2.5rem',
                                color: '#f44346',
                                mr: 1
                            }} />
                            <Link href={'tel:' + data?.header?.phone} sx={{
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
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
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <TelegramIcon sx={{
                                fontSize: '2.5rem',
                                color: '#f44346',
                                mr: 1
                            }} />
                            <Link href={data?.header?.telegramLink} sx={{
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
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

                <List>
                    {data?.header?.menu.map((item) => (
                        <ListItem
                            key={item.id}
                            disablePadding
                            sx={{
                                borderBottom: '1px solid',
                                borderColor: 'divider'
                            }}
                        >
                            <Button
                                to={item.url}
                                component={RouterLink}
                                fullWidth
                                sx={{
                                    py: 2,
                                    px: 3,
                                    justifyContent: 'flex-start',
                                    color: 'text.primary',
                                    '&:hover': {
                                        color: 'primary.main',
                                        backgroundColor: 'action.hover'
                                    }
                                }}
                                onClick={handleDrawerToggle}
                            >
                                {item.title}
                            </Button>
                        </ListItem>
                    ))}

                    {/* Контакты в мобильном меню */}
                    <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', p: 3 }}>
                        <Link
                            href={'tel:' + data?.header?.schedule}
                            variant="body1"
                            fontWeight={600}
                            gutterBottom
                            underline='hover'
                        >
                            {data?.header?.phone}
                        </Link>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            {data?.header?.schedule}
                        </Typography>
                        <Link
                            href={'mailto:' + data?.header?.email}
                            color="primary"
                            underline="hover"
                            sx={{ mt: 1 }}
                        >
                            {data?.header?.email}
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default Header;