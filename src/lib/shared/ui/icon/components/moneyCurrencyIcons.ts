import React, { lazy } from "react";

export const Euro = lazy(
  () => import("../../../icons/MoneyCurrency/euro.svg?react"),
);
export const Exchange = lazy(
  () => import("../../../icons/MoneyCurrency/exchange.svg?react"),
);
export const Franc = lazy(
  () => import("../../../icons/MoneyCurrency/franc.svg?react"),
);
export const Lira = lazy(
  () => import("../../../icons/MoneyCurrency/lira.svg?react"),
);
export const Pound = lazy(
  () => import("../../../icons/MoneyCurrency/pound.svg?react"),
);
export const Ruble = lazy(
  () => import("../../../icons/MoneyCurrency/ruble.svg?react"),
);
export const Rupee = lazy(
  () => import("../../../icons/MoneyCurrency/rupee.svg?react"),
);
export const Yen = lazy(
  () => import("../../../icons/MoneyCurrency/yen.svg?react"),
);
export const Yuan = lazy(
  () => import("../../../icons/MoneyCurrency/yuan.svg?react"),
);

export type MoneyCurrencyIcons =
  | "MoneyCurrencyEuro"
  | "MoneyCurrencyExchange"
  | "MoneyCurrencyFranc"
  | "MoneyCurrencyLira"
  | "MoneyCurrencyPound"
  | "MoneyCurrencyRuble"
  | "MoneyCurrencyRupee"
  | "MoneyCurrencyYen"
  | "MoneyCurrencyYuan";

export const moneyCurrencyIconsList: Record<
  MoneyCurrencyIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  MoneyCurrencyEuro: Euro,
  MoneyCurrencyExchange: Exchange,
  MoneyCurrencyFranc: Franc,
  MoneyCurrencyLira: Lira,
  MoneyCurrencyPound: Pound,
  MoneyCurrencyRuble: Ruble,
  MoneyCurrencyRupee: Rupee,
  MoneyCurrencyYen: Yen,
  MoneyCurrencyYuan: Yuan,
};
