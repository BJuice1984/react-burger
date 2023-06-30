import { RootState } from "../types";

export const postProfileEmail = (state: RootState) => state.profile.profileEmail;
export const postProfileName = (state: RootState) => state.profile.profileName;
export const postProfileRefreshToken = (state: RootState) => state.profile.profileRefreshToken;
export const fetchRequest = (state: RootState) => state.profile.fetchRequest;