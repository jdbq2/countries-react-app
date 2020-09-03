import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ pageTitle, description }) => {
  return (
    <Helmet>
      <title>{`${pageTitle} | 🌐Countries App `}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Head;
