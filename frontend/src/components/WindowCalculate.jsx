import { useState } from "react"
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Paper,
    Radio,
    TextField,
    Typography,
    Link,
    styled,
    Skeleton
} from '@mui/material'
import CallBackModal from "./CallbackModal";

// Стилизованные компоненты
const GreyBgSection = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.grey[50],
    padding: theme.spacing(4, 0),
}));

const CalculatorForm = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
}));

const WindowCalculate = ({ calculateBlock, loading }) => {

    const [repairTypes, setRepairTypes] = useState([]);
    const [windowMeasurements, setWindowMeasurements] = useState({});
    const [openedWindows, setOpenedWindows] = useState([]);
    const [repairLocation, setRepairLocation] = useState('in_city');
    const [distance, setDistance] = useState('');
    const [agree, setAgree] = useState(false);
    const [openModal, setOpenModal] = useState(false)

    if (loading) return (
        <Box>
            <Skeleton variant='rectangular' height={'7rem'} width={'100%'} />
        </Box>
    )


    // Обработчики
    const handleRepairTypeChange = (value) => {
        setRepairTypes(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const handleWindowMeasurementChange = (name, field, value) => {
        setWindowMeasurements(prev => ({
            ...prev,
            [name]: {
                ...prev[name],
                [field]: value
            }
        }));
    };

    const handleWindowToggle = (windowType, idx, isChecked) => {
        setOpenedWindows(prev => {
            const existingIndex = prev.findIndex(item => item.windowType === windowType);
            const existing = existingIndex >= 0 ? prev[existingIndex] : null;

            // Добавляем +1 к индексу при сохранении
            const currentOpenings = existing?.openings || [];
            let newOpenings;

            if (isChecked) {
                newOpenings = [...new Set([...currentOpenings, idx + 1])].sort();
            } else {
                newOpenings = currentOpenings.filter(i => i !== idx + 1);
            }

            const newArray = [...prev];
            if (existingIndex >= 0) {
                newArray[existingIndex] = {
                    windowType,
                    openings: newOpenings,
                    count: newOpenings.length
                };
            } else {
                newArray.push({
                    windowType,
                    openings: newOpenings,
                    count: newOpenings.length
                });
            }

            return newArray.filter(item => item.openings.length > 0);
        });
    };

    const handleSubmitCalculate = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }

    const resetForm = () => {
        setRepairTypes([]);
        setWindowMeasurements({});
        setOpenedWindows([]);
        setRepairLocation('in_city');
        setDistance('');
        setAgree(false);
    };

    return (
        <GreyBgSection component="section">
            <CallBackModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                formCalculateData={{
                    repairTypes,
                    windowMeasurements,
                    openedWindows,
                    repairLocation,
                    distance,
                    agree
                }}
                resetForm={resetForm}
            />
            <Container maxWidth="lg">
                <Typography variant="h2" gutterBottom>
                    {calculateBlock?.title}
                </Typography>

                <CalculatorForm component="form">
                    {/* Тип ремонта */}
                    <Box mb={4}>
                        <Typography variant="h4" gutterBottom>
                            Какой вид ремонта нужен окну?
                        </Typography>
                        <Grid container spacing={2}>
                            {calculateBlock?.repairType.map((option) => (
                                <Grid key={option.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={repairTypes.includes(option.name)}
                                                onChange={() => handleRepairTypeChange(option.name)}
                                            />
                                        }
                                        label={option.name}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Выбор окна */}
                    <Box mb={4}>
                        <Typography variant="h4" gutterBottom>
                            Выберите вид окна и укажите его параметры
                        </Typography>
                        <Grid container spacing={2}>
                            {calculateBlock?.windowTypes.map((windowType) => (
                                <Grid key={windowType.id} size={{ xs: 12, sm: 4, md: 2 }}>
                                    <Paper
                                        elevation={2}
                                        sx={{
                                            height: '100%',
                                            p: 1
                                        }}>
                                        <Grid
                                            container
                                            spacing={1}
                                            sx={{
                                                alignContent: 'space-between',
                                                height: '100%'
                                            }}
                                        >
                                            <Grid size={{ xs: 12 }} sx={{
                                                textAlign: 'center',
                                                position: 'relative'
                                            }}>
                                                <Box component='img'
                                                    src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + windowType?.image?.url}
                                                    alt={windowType.name}
                                                    loading='lazy'
                                                    sx={{
                                                        maxWidth: '100%',
                                                        height: 'auto',
                                                        '&::before': {
                                                            background: 'rgba(0, 0, 0, 0.6)'
                                                        }
                                                    }} />
                                                <Box sx={{
                                                    position: 'absolute',
                                                    width: '100%',
                                                    top: '15%',
                                                    justifyContent: 'center'
                                                }}>
                                                    {Array.from({ length: windowType.openings }).map((_, idx) => {
                                                        const windowEntry = openedWindows.find(item => item.windowType === windowType.name);
                                                        const isChecked = windowEntry
                                                            ? (windowEntry.openings || []).includes(idx + 1)
                                                            : false;

                                                        return (
                                                            <FormControlLabel
                                                                key={idx}
                                                                control={
                                                                    <Checkbox
                                                                        onChange={(e) => handleWindowToggle(windowType.name, idx, e.target.checked)}
                                                                        checked={isChecked}
                                                                        sx={{
                                                                            p: '0',
                                                                            color: 'grey.50',
                                                                            '&.Mui-checked': {
                                                                                color: 'grey.50'
                                                                            }
                                                                        }}
                                                                    />
                                                                }
                                                                label="Откр."
                                                                labelPlacement='top'
                                                                sx={{
                                                                    m: 0,
                                                                    color: 'grey.100',
                                                                    fontWeight: '300',
                                                                    p: '0 5px'
                                                                }}
                                                            />
                                                        );
                                                    })}
                                                </Box>
                                            </Grid>
                                            <Grid size={{ xs: 12 }}>
                                                <TextField
                                                    fullWidth
                                                    label="Ширина, мм"
                                                    type="number"
                                                    value={windowMeasurements[windowType.name]?.width || ''}
                                                    onChange={(e) => handleWindowMeasurementChange(windowType.name, 'width', e.target.value)}
                                                    sx={{ mb: 2 }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    label="Высота, мм"
                                                    type="number"
                                                    value={windowMeasurements[windowType.name]?.height || ''}
                                                    onChange={(e) => handleWindowMeasurementChange(windowType.name, 'height', e.target.value)}  // Исправлено с id на name
                                                    sx={{ mb: 2 }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Место ремонта */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h4" gutterBottom>
                            Ремонт осуществляется
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControlLabel
                                    control={
                                        <Radio
                                            checked={repairLocation === 'in_city'}
                                            onChange={() => setRepairLocation('in_city')}
                                        />
                                    }
                                    label="В городе"
                                />
                                <Box display="flex" alignItems="center">
                                    <FormControlLabel
                                        control={
                                            <Radio
                                                checked={repairLocation === 'out_of_city'}
                                                onChange={() => setRepairLocation('out_of_city')}
                                            />
                                        }
                                        label="За городом"
                                    />
                                    {repairLocation === 'out_of_city' && (
                                        <>
                                            <TextField
                                                size="small"
                                                type="number"
                                                value={distance}
                                                onChange={(e) => setDistance(e.target.value)}
                                                sx={{ mx: 1, width: '80px' }}
                                            />
                                            <Typography variant="body2">км</Typography>
                                        </>
                                    )}
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={agree}
                                            onChange={(e) => setAgree(e.target.checked)}
                                        />
                                    }
                                    label={
                                        <Typography>
                                            Согласие c {' '}
                                            <Link href="/politika-konfidenczialnosti" color="primary">
                                                политикой конфиденциальности
                                            </Link>
                                        </Typography>
                                    }
                                    sx={{ mb: 2 }}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    fullWidth
                                    disabled={!agree}
                                    onClick={(e) => handleSubmitCalculate(e)}
                                >
                                    Вызвать мастера
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </CalculatorForm>
            </Container>
        </GreyBgSection>
    )
};

export default WindowCalculate;