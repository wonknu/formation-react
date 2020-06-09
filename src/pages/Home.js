import React, { useContext } from 'react';
import { LocalizeContext } from '../components/localize';

const Home = (props) => {
  const { t } = useContext(LocalizeContext);
  return <div>{t("PAGE_HOME")}</div>;
};

export default Home;
