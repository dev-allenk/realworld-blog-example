import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { IUser } from "@types";

export type UserAction = ActionType<typeof actions>;

export interface UserState extends IUser {
  isLoading: boolean;
}
