import { createClient } from "@supabase/supabase-js";
import { AppState } from "react-native";
import { storage } from "../storage/storage";
// import "react-native-url-polyfill/auto";

export const supabaseClient = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL || "",
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "",
  {
    auth: {
      storage: {
        getItem: async (key) => {
          if (typeof window === "undefined") {
            return null;
          }
          return storage.getString(key) ?? null;
        },
        setItem: async (key, value) => {
          if (typeof window === "undefined") {
            return;
          }
          storage.set(key, value);
        },
        removeItem: async (key) => {
          if (typeof window === "undefined") {
            return;
          }
          storage.delete(key);
        },
      },
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabaseClient.auth.startAutoRefresh();
  } else {
    supabaseClient.auth.stopAutoRefresh();
  }
});
