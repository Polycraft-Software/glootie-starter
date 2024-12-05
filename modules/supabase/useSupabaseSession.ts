import type { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabaseClient } from "./supabase";
export default function useSupabaseSession() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return session;
}
