import React, { lazy } from "react";

export const Apartment = lazy(
  () => import("../../../icons/Company/apartment.svg?react"),
);
export const Bank = lazy(() => import("../../../icons/Company/bank.svg?react"));
export const Business = lazy(
  () => import("../../../icons/Company/business.svg?react"),
);
export const Company = lazy(
  () => import("../../../icons/Company/company.svg?react"),
);
export const InterbankSettlements = lazy(
  () => import("../../../icons/Company/interbank_settlements.svg?react"),
);

export type CompanyIcons =
  | "CompanyApartment"
  | "CompanyBank"
  | "CompanyBusiness"
  | "CompanyCompany"
  | "CompanyInterbankSettlements";

export const companyIconsList: Record<
  CompanyIcons,
  React.LazyExoticComponent<
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  >
> = {
  CompanyApartment: Apartment,
  CompanyBank: Bank,
  CompanyBusiness: Business,
  CompanyCompany: Company,
  CompanyInterbankSettlements: InterbankSettlements,
};
