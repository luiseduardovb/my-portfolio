import React from "react";

//Material UI
import { Typography } from "@material-ui/core";

// Translation
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <div style={{ backgroundColor: "blue" }}>
      <Typography variant="h1" color="primary">
        {t("common:title")}
      </Typography>
    </div>
  );
};

export default Home;
