import { createSelector } from "reselect";
import i18n from "../../i18n";

export const getApp = ({ app }) => app;

export const getUserInteractions = createSelector(
  getApp,
  ({ userInteractions }) => userInteractions
);

export const getLastTroopAdded = createSelector(
  getUserInteractions,
  ({ lastTroopAdded }) => lastTroopAdded
);

export const getSelectedSquared = createSelector(
  getUserInteractions,
  ({ selectedSquare }) => selectedSquare
);

export const getTroopSelectionFormStatus = createSelector(
  getUserInteractions,
  ({ troopSelectionFormStatus }) => troopSelectionFormStatus
);

export const getAppLanguage = createSelector(
  getApp,
  ({ language }) => language || "en"
);

export const getLocalisedContent = createSelector(
  getAppLanguage,
  (language) => i18n[language]
);
