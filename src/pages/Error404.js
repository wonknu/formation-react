import React, { useContext } from 'react';
import { LocalizeContext } from '../components/localize';

const Error404 = (props) => {
  const { t } = useContext(LocalizeContext);
  return <div>{t('PAGE_404')}</div>;
};

export default Error404;
