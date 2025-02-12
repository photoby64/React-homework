// const { BASE_URL } = import.meta.env;

// export const getPublic = (filePath: string) => BASE_URL + filePath;

// export const getPublicImage = (filePath: string, imagesDirName = 'images') => {
//   return getPublic(`${imagesDirName}/${filePath}`);
// };

// export const getPublicIcon = (filePath: string, iconsDirName = 'icons') => {
//   return getPublic(`${iconsDirName}/${filePath}`);
// };

// ----------------------------------------------- //

// const { BASE_URL } = import.meta.env;

// export const getPublic = (filePath: string) => BASE_URL + filePath;

// export const getPublicImage = (filePath: string, imagesDirName = 'assets') => {
//   return getPublic(`${imagesDirName}/${filePath}`);
// };

// =============================================== //

const { BASE_URL } = import.meta.env;

export const getPublic = (filePath: string) => {
  return `${BASE_URL}${filePath}`; // ✅ BASE_URL이 자동으로 dev/build 환경에 맞게 변경됨
};

/**
 * 이미지 경로를 자동으로 맞춰줌
 * - 개발 모드(`/assets/...`)에서 정상 동작
 * - GitHub Pages (`/React-homework/assets/...`)에서도 정상 동작
 */
export const getPublicImage = (filePath: string, imagesDirName = 'assets') => {
  return getPublic(`${imagesDirName}/${filePath}`);
};
