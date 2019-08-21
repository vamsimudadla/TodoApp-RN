import I18n from "react-native-i18n";
import english from "../config/languages/english";
import hindi from "../config/languages/hindi";
import telugu from "../config/languages/telugu";

I18n.fallbacks = true;
I18n.missingBehaviour = "guess";
I18n.defaultLocale = "english";
I18n.locale = "english";

I18n.translations = {
  english,
  hindi,
  telugu
};

export const setLocale = locale => {
  I18n.locale = locale;
};

export const getCurrentLocale = () => I18n.locale;

export const translateHeaderText = langKey => ({ screenProps }) => {
  const title = I18n.translate(langKey, screenProps.language);
  return { title };
};

export default I18n.translate.bind(I18n);
