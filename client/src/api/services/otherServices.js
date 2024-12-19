import {currency, getCountryState, settings, themeOptions} from '../endpoints';
import {GET_API} from '../methods';

export const countryStateData = async () => {
  return GET_API(getCountryState)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const settingsData = async () => {
  return GET_API(settings)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const currencyData = async () => {
  return GET_API(currency)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

export const themeOptionData = async () => {
  return GET_API(themeOptions)
    .then(res => {
      return res;
    })
    .catch(e => {
      return e?.response;
    });
};

const countryStateServices = {
  countryStateData,
  settingsData,
  currencyData,
  themeOptionData,
};
export default countryStateServices;
