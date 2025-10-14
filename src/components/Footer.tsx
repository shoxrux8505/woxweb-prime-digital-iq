import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p>
            {t("footer.copyright")} <span className="gradient-text font-semibold">{t("footer.company")}</span> {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
