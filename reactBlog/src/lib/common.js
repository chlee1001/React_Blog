import koLocale from 'date-fns/locale/ko';

export const fromNow = d => {
    return distanceInWords(new Date(), d, { locale: koLocale, addSuffix: true });
  };