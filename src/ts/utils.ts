/**
 * 亂數取enum值
 *
 * @param {object} enumeration - 指定enum
 * @returns {any} enum值
 */
export const randomEnumValue = (enumeration: any) => {
  const values = Object.keys(enumeration);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  return enumeration[enumKey];
};

/**
 * 取亂數
 *
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @returns {number} 亂數
 */
export const rand = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
