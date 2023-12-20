import React from 'react';
import { useLanguage } from '../../hooks/languageContext';
import { useTranslation } from "react-i18next";
const Language = () => {
    const { t , i18n } = useTranslation();
    const {language,changeLanguage} = useLanguage();
    const handleChangeLanguage = (e) => {
        const newLanguage = e.target.value;
        changeLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
    };
    return (
        <div>
            <select
                value={language}
                onChange={handleChangeLanguage}
                className='p-3 rounded-lg bg-transparent border border-white max-md:p-1'
            >
                <option value="vi">{t('Tiếng Việt')}</option>
                <option value="en">{t('English')}</option>
            </select>
        </div>
    );
};

export default Language;