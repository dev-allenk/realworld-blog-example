import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type ArticleAction = ActionType<typeof actions>;
