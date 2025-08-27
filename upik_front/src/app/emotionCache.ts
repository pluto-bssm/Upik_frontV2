import createCache from '@emotion/cache';

export const cache = createCache({
  key: 'css',
  prepend: true,
  // SSR 환경에서 일관된 클래스명 생성을 위해 추가
  speedy: false,
  // 개발환경에서 클래스명 충돌 방지
  ...(typeof window === 'undefined' && {
    insertionPoint: undefined,
  }),
});

// 서버사이드에서만 사용할 별도 캐시 생성
export const serverCache = createCache({
  key: 'css',
  prepend: true,
  speedy: false,
  insertionPoint: undefined,
});

// 클라이언트와 서버 환경 구분
export const getCache = () => {
  if (typeof window === 'undefined') {
    return serverCache;
  }
  return cache;
};