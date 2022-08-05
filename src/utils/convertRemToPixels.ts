export const convertRemToPixels = (pixels: string | number) => {
  return Number(pixels) / 16 + 'rem';
};
