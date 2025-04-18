import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Modal,
    Fade,
    Backdrop,
    Alert,
    CircularProgress,
    Snackbar,
    IconButton,
    Link
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink } from 'next/link';

const CallBackModal = ({ open, onClose, formCalculateData = {}, resetForm }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        description: '',
        photo: null,
    });

    const handleRemovePhoto = () => {
        if (formData.photo) {
            URL.revokeObjectURL(URL.createObjectURL(formData.photo));
        }
        setFormData((prev) => ({ ...prev, photo: null }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 5 * 1024 * 1024) {
            setAlert({
                open: true,
                message: 'Файл слишком большой (макс. 5MB)',
                severity: 'warning',
            });
            return;
        }
        setFormData((prev) => ({ ...prev, photo: file }));
    };

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });
    const [captcha, setCaptcha] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Введите имя';
        if (!formData.phone) newErrors.phone = 'Введите телефон';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('chat_id', process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID);

            let message = `📌 Новая заявка:\n\n👤 Имя: ${formData.name}\n📞 Телефон: ${formData.phone}\n📝 Описание: ${formData.description || 'не указано'}`;

            // Добавляем данные из калькулятора (если есть)
            if (formCalculateData && formCalculateData.agree === true) {
                message += `\n\nДанные из калькулятора:`;

                // Обработка repairTypes
                const repairTypes = formCalculateData.repairTypes
                    ? formCalculateData.repairTypes.join(", ")
                    : "не выбрано";
                message += `\n\nВид ремонта: ${repairTypes}`;

                // Обработка windowMeasurements
                let windowMeasurements = "не заполнено";
                if (formCalculateData.windowMeasurements) {
                    const measurements = [];
                    for (const [windowName, value] of Object.entries(formCalculateData.windowMeasurements)) {
                        if (value.width && value.height) {
                            measurements.push(`${windowName}: ${value.width}x${value.height} мм`);
                        }
                    }
                    windowMeasurements = measurements.join("; ");
                }
                message += `\n\nРазмеры окна: ${windowMeasurements}`;

                // Обработка openedWindows
                let openedWindows = "не выбрано";
                if (formCalculateData.openedWindows) {
                    const windows = formCalculateData.openedWindows.map(item =>
                        `${item.windowType}: ${item.openings.join(", ")} (${item.count} шт.)`
                    );
                    openedWindows = windows.join("; ");
                }
                message += `\n\nОткрытые окна: ${openedWindows}`;

                // Обработка местоположения
                let locationInfo = "не указано";
                if (formCalculateData.repairLocation === "in_city") {
                    locationInfo = "в городе";
                } else if (formCalculateData.distance) {
                    locationInfo = `${formCalculateData.distance}км от города`;
                }
                message += `\n\nНаходится: ${locationInfo}`;
            }

            // Отправка в Telegram
            if (formData.photo) {
                formDataToSend.append('photo', formData.photo);
                formDataToSend.append('caption', message);

                const telegramResponse = await fetch(
                    `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendPhoto`,
                    {
                        method: 'POST',
                        body: formDataToSend,
                    }
                );
                if (!telegramResponse.ok) throw new Error('Ошибка отправки фото в Telegram');
            } else {
                const telegramResponse = await fetch(
                    `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
                            text: message,
                        }),
                    }
                );
                if (!telegramResponse.ok) throw new Error('Ошибка отправки сообщения в Telegram');
            }

            const strapiData = {
                name: formData.name,
                phone: formData.phone,
                text: message
            };


            const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/request-services`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ data: strapiData }),
                }
            );
            if (!response.ok) throw new Error("Ошибка при отправке");

            handleSuccess();
        } catch (error) {
            setAlert({
                open: true,
                message: 'Ошибка отправки: ' + error.message,
                severity: 'error',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSuccess = () => {
        setAlert({
            open: true,
            message: 'Заявка успешно отправлена!',
            severity: 'success',
        });
        setFormData({ name: '', phone: '', description: '', photo: null });
        setCaptcha(null);
        resetForm();
        onClose();
    };

    return (
        <>
            <Modal open={open} onClose={onClose} closeAfterTransition slots={{ backdrop: Backdrop }}>
                <Fade in={open}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: { xs: '90%', sm: 500 }, // Адаптивная ширина
                            maxHeight: '90vh', // Максимальная высота
                            overflowY: 'auto', // Прокрутка при необходимости
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: { xs: 2, sm: 4 }, // Адаптивные отступы
                            borderRadius: 2,
                        }}
                    >
                        <Typography variant="h6" component="h2" gutterBottom>
                            Заказать обратный звонок
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                            {/* Поле "Имя" */}
                            <TextField
                                fullWidth
                                label="Имя*"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                                margin="normal"
                                disabled={isSubmitting}
                                size="small" // Компактный размер для мобильных
                            />

                            {/* Поле "Телефон" */}
                            <TextField
                                fullWidth
                                label="Телефон*"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                error={!!errors.phone}
                                helperText={errors.phone}
                                margin="normal"
                                disabled={isSubmitting}
                                size="small" // Компактный размер для мобильных
                            />

                            {/* Поле "Описание" */}
                            <TextField
                                fullWidth
                                label="Описание"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                margin="normal"
                                multiline
                                rows={4}
                                disabled={isSubmitting}
                                size="small" // Компактный размер для мобильных
                            />

                            {/* Кнопка загрузки файла */}
                            <Box sx={{ position: 'relative', mt: 2 }}>
                                <Button
                                    variant="contained"
                                    component="label"
                                    fullWidth
                                    startIcon={<CloudUploadIcon />}
                                    disabled={isSubmitting}
                                    sx={{
                                        bgcolor: 'primary.main',
                                        '&:hover': { bgcolor: 'primary.dark' },
                                        py: { xs: 1, sm: 1.5 }, // Адаптивная высота
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                    }}
                                >
                                    Загрузить фото
                                    <input
                                        type="file"
                                        hidden
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </Button>

                                {/* Превью изображения */}
                                {formData.photo && (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mt: 2,
                                            border: '1px solid #e0e0e0',
                                            borderRadius: 2,
                                            p: { xs: 1, sm: 1.5 }, // Адаптивные отступы
                                            bgcolor: '#fafafa',
                                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        {/* Изображение */}
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                width: { xs: 80, sm: 100 }, // Адаптивная ширина
                                                height: { xs: 80, sm: 100 }, // Адаптивная высота
                                                borderRadius: 1,
                                                overflow: 'hidden',
                                                mr: 2,
                                            }}
                                        >
                                            <img
                                                src={URL.createObjectURL(formData.photo)}
                                                alt="Preview"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </Box>

                                        {/* Информация о файле */}
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                {formData.photo.name}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                Размер: {(formData.photo.size / (1024 * 1024)).toFixed(2)} MB
                                            </Typography>
                                        </Box>

                                        {/* Кнопка удаления */}
                                        <IconButton
                                            onClick={handleRemovePhoto}
                                            size="small"
                                            sx={{
                                                color: 'error.main',
                                                '&:hover': { bgcolor: 'rgba(255, 0, 0, 0.1)' },
                                            }}
                                        >
                                            <CloseIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                )}
                            </Box>
                            <Box sx={{ my: 2 }}>
                                <Typography variant='caption'>Отправляя данные вы соглашаетесь с <Link component={RouterLink} to={'/politika-konfidenczialnosti'} onClick={onClose}>политикой конфиденциальности</Link></Typography>
                            </Box>

                            {/* Кнопки "Отмена" и "Отправить" */}
                            <Box
                                sx={{
                                    mt: 3,
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' }, // Перенос на новую строку для мобильных
                                    justifyContent: 'flex-end',
                                    gap: 2, // Расстояние между кнопками
                                }}
                            >
                                <Button
                                    onClick={onClose}
                                    fullWidth={true} // На мобильных делаем кнопки шириной во всю ширину
                                    disabled={isSubmitting}
                                    sx={{
                                        py: { xs: 1, sm: 1.5 }, // Адаптивная высота
                                    }}
                                >
                                    Отмена
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth={true} // На мобильных делаем кнопки шириной во всю ширину
                                    disabled={isSubmitting}
                                    endIcon={isSubmitting && <CircularProgress size={20} />}
                                    sx={{
                                        py: { xs: 1, sm: 1.5 }, // Адаптивная высота
                                    }}
                                >
                                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>

            {/* Уведомление */}
            <Snackbar
                open={alert.open}
                autoHideDuration={6000}
                onClose={() => setAlert({ ...alert, open: false })}
            >
                <Alert severity={alert.severity}>{alert.message}</Alert>
            </Snackbar>
        </>
    );
};

export default CallBackModal;