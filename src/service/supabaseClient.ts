import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_SECRET_KEY as string;

const supabaseClient = createClient(supabaseUrl, supabaseKey);
