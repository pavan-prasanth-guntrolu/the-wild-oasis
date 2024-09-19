import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rthfedskgjasqwcqnhcv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0aGZlZHNrZ2phc3F3Y3FuaGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3NzE5NTUsImV4cCI6MjA0MTM0Nzk1NX0.bzNQvi0Xlvwu1-tU_JmoPFNQghkIGIsvNkpxzGRKSts";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
