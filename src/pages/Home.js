import React from 'react';
import HeaderPage from '../layouts/components/header';
import Section from '../layouts/components/section';
import Article from '../layouts/components/article'
import { useLanguage } from '../hooks/languageContext';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  return (
    <div>
      <HeaderPage t={t} language={language} />
      <Section t={t} language={language} />
     <Article  t={t} language={language} />
    </div>
  );
};

export default Home;
