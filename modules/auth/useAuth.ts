import { useAtom } from "jotai";
import { RESET, atomWithStorage } from "jotai/utils";
import { storage } from "../storage/storage";
import { supabaseClient } from "../supabase/supabase";

type SessionUser = {
  id: string;
  email?: string;
};

const authSessionUserAtom = atomWithStorage<SessionUser | null>(
  "auth-session-user",
  null,
  {
    getItem: async (key) => {
      const user = storage.getString(key);
      return user ? JSON.parse(user) : null;
    },
    setItem: async (key, value) => {
      storage.set(key, JSON.stringify(value));
    },
    removeItem: async (key) => {
      storage.delete(key);
    },
  }
);

const useAuth = () => {
  const [sessionUser, setSessionUser] = useAtom(authSessionUserAtom);

  const login = async (email: string, password: string) => {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(`Error: ${error.message}`);
    }

    if (data) {
      setSessionUser(data.user);
    }
  };

  const logout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      alert(`Error: ${error.message}`);
    }

    setSessionUser(RESET);
  };

  const signup = async (email: string, password: string) => {
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(`Error: ${error.message}`);
    }

    if (data) {
      setSessionUser(data.user);
    }
  };

  return { sessionUser, login, logout, signup };
};

export { useAuth };
