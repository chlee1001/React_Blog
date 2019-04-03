import distanceInWords from 'date-fns/distance_in_words';
import koLocale from 'date-fns/locale/ko';
import { pender } from 'redux-pender';
import removeMd from 'remove-markdown';

export const fromNow = d => {
  return distanceInWords(new Date(), d, { locale: koLocale, addSuffix: true });
};

export function updateObject(state, updated) {
  return {
    ...state,
    ...updated
  };
}

export function resizeImage(url: string, width?: number = 256) {
  if (url.indexOf('data:image/') !== -1) return url;
  return `https://thumb.velog.io/resize?url=${url}&width=${width}`;
}

export const getScrollTop = () => {
  if (!document.body) return 0;
  const scrollTop = document.documentElement
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document.body.scrollTop;
  return scrollTop;
};
export const getScrollBottom = () => {
  if (!document.body) return 0;
  const { scrollHeight } = document.body;
  const { innerHeight } = window;
  const scrollTop = getScrollTop();
  return scrollHeight - innerHeight - scrollTop;
};

export function convertToPlainText(markdown: string): string {
  if (!markdown) return '';
  const replaced = markdown.replace(/\n/g, ' ').replace(/```(.*)```/g, '');
  return removeMd(replaced)
    .slice(0, 150)
    .replace(/#/g, '');
}

export function applyPenders<T: Reducer>(reducer: T, penders: any[]): T {
  const updaters = Object.assign({}, ...penders.map(pender));
  return ((state, action) => {
    if (updaters[action.type]) {
      return updaters[action.type](state, action);
    }
    return reducer(state, action);
  }: any);
}
export type ResponseAction = {
  type: string,
  payload: $AxiosXHR<*>,
  error: $AxiosError<*>,
  meta: any
};
