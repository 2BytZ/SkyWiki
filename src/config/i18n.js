import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

const localeModules = import.meta.glob("./locales/*/*.json");

function loadLocale(language, namespace) {
    const localePath = `./locales/${language}/${namespace}.json`;
    const loadModule = localeModules[localePath];

    if (!loadModule) {
        return Promise.reject(new Error(`Missing translation file: ${localePath}`));
    }

    return loadModule();
}

i18next.use(resourcesToBackend(loadLocale)).use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    ns: ["home"],
    defaultNS: "home",
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;