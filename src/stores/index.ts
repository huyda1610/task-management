import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import tasksSlice from "./tasks-slice";

export const store = configureStore({
  reducer: {
    // ui: uiSlice,
    tasks: tasksSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["ui/removeModal", "ui/pushModal"],
        ignoredPaths: ["ui.modalInfos"],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;
