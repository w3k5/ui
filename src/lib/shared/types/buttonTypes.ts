/**
 * Размеры для кнопок.
 */
export type Size = "extra-small" | "small" | "medium" | "large";

/**
 * Варианты для кнопок.
 */
export type Variant = "outlined" | "contained" | "text";

/**
 * Интерфейс для пропсов, которые определяют размер и вариант кнопки.
 */
export interface SizeVariantProps {
  /**
   * Размер кнопки.
   * @default 'small'
   */
  size?: Size;

  /**
   * Вариант кнопки.
   * @default 'contained'
   */
  variant?: Variant;
}
