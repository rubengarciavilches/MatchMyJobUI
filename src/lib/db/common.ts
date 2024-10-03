import { createClient } from "@supabase/supabase-js";

const projectURL = import.meta.env.VITE_SUPABASE_URL;
const publicSupabaseKey = import.meta.env.VITE_SUPABASE_PUBLIC_KEY;
const supabase = createClient(projectURL, publicSupabaseKey);

export function getClient() {
	return supabase;
}
