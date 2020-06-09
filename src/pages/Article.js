import React from 'react';
import { useParams } from "react-router";

const Article = (props) => {
  let { id } = useParams();

  return <div>Article id : {id}</div>;
};

export default Article;
