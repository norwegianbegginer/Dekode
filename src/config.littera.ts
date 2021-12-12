import { createLittera } from '@assembless/react-littera';

const LOCALES = [`en_US`, `no_NO`, `pl_PL`] as const;

const PRESET = {
  en_US: {
    language: `Language`,
    yes: `Yes`,
    no: `No`,
  },
  pl_PL: {
    language: `Język`,
    yes: `Tak`,
    no: `Nie`,
  },
  no_NO: {
    language: `Språk`,
    yes: `Ja`,
    no: `Nei`,
  },
};
const { LitteraService, makeTranslations, useLitteraMethods } = createLittera(
  LOCALES,
  PRESET,
);

export { LitteraService, makeTranslations, useLitteraMethods };
