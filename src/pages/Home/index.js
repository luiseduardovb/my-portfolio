import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Typography } from "@material-ui/core";

const Home = () => {
  const { t, i18n } = useTranslation("common");
  const isEnglish = i18n.language === "en";
  return (
    <div>
      <Typography variant="h1" color="secondary">
        {t("common:title")}
      </Typography>{" "}
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => i18n.changeLanguage(isEnglish ? "es" : "en")}
      >
        {isEnglish ? "EN" : "ES"}
      </Button>
    </div>
  );
};

export default Home;
