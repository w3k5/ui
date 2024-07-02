import type { MouseEvent } from "react";
import { useCallback, useState } from "react";

export const RIPPLE_SIZE = 100;

export interface RippleProps {
  x: number;
  y: number;
  key: number;
}

/**
 * Хук для управления эффектом Ripple.
 *
 * @returns {Object} Состояние и функции для управления Ripple
 */
export const useRipple = () => {
  const [ripples, setRipples] = useState<RippleProps[]>([]);
  const [rippleKey, setRippleKey] = useState(0);

  /**
   * Создание эффекта Ripple при клике.
   *
   * @param {MouseEvent<HTMLButtonElement>} event Событие клика
   */
  const createRipple = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = event.clientX
        ? event.clientX - rect.left - RIPPLE_SIZE / 2
        : rect.width / 2 - RIPPLE_SIZE / 2;
      const y = event.clientY
        ? event.clientY - rect.top - RIPPLE_SIZE / 2
        : rect.height / 2 - RIPPLE_SIZE / 2;
      const newRipple = { x, y, key: rippleKey };
      setRipples((prevRipples) => [...prevRipples, newRipple]);
      setRippleKey((prevKey) => prevKey + 1);
    },
    [rippleKey],
  );

  /**
   * Удаление эффекта Ripple после завершения анимации.
   *
   * @param {number} key Ключ эффекта Ripple
   */
  const handleAnimationEnd = useCallback((key: number) => {
    setRipples((prevRipples) =>
      prevRipples.filter((ripple) => ripple.key !== key),
    );
  }, []);

  return {
    ripples,
    createRipple,
    handleAnimationEnd,
  };
};
