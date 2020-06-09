import React, { useContext } from 'react';
import { useParams } from "react-router";
import { LocalizeContext } from '../components/localize';

const Article = (props) => {
  const { t } = useContext(LocalizeContext);
  let { id } = useParams();

  return <div>{t('PAGE_ARTICLE')} : {id}</div>;
};

export default Article;
