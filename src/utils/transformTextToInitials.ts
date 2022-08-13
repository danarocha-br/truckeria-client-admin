export function transformTextToInitials(text: string) {
  return (
    text &&
    text
      .trim()
      .split(' ')
      .reduce((initial, text) => initial + text[0], '')
      .slice(0, 2)
      .toUpperCase()
  );
}
