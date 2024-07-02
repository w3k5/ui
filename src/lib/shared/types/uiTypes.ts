/**
 * Размеры для элементов интерфейса.
 */
export type Size = "XXS" | "XS" | "S" | "M" | "L";

/**
 * Варианты для элементов интерфейса.
 */
export type Variant = "outlined" | "contained" | "text";

/**
 * Цветовые схемы для элементов интерфейса.
 */
export type ColorScheme =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "success"
  | "info";

/**
 * Интерфейс для пропсов, которые определяют размер, вариант и цветовую схему.
 */
export interface SizeVariantProps {
  /**
   * Размер элемента интерфейса.
   * @default 'S'
   */
  size?: Size;

  /**
   * Вариант элемента интерфейса.
   * @default 'contained'
   */
  variant?: Variant;

  /**
   * Цветовая схема элемента интерфейса.
   * @default 'primary'
   */
  colorScheme?: ColorScheme;
}
