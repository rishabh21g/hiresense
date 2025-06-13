const { createClient } = require("@supabase/supabase-js");

// Add fallback values to prevent errors during development
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Check if the URL is a valid Supabase URL (not a placeholder)
const isValidSupabaseUrl = (url) => {
  if (!url || url.includes('your_supabase_project_url_here')) {
    return false;
  }
  try {
    new URL(url);
    return url.includes('supabase.co') || url.includes('localhost');
  } catch {
    return false;
  }
};

// Check if the anon key is valid (not a placeholder)
const isValidAnonKey = (key) => {
  return key && !key.includes('your_supabase_anon_key_here') && key.length > 20;
};

// Only create client if both values are present and valid
export const sb = isValidSupabaseUrl(supabaseUrl) && isValidAnonKey(supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Export a helper function to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return sb !== null;
};