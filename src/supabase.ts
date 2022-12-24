import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

export const supabase = createClient<Database>(
  "https://pjbvpypxedzggytqsrny.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqYnZweXB4ZWR6Z2d5dHFzcm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE3Mjk1OTIsImV4cCI6MTk4NzMwNTU5Mn0.x0sAnEnmtkM3gbes23Z5Gec0uGPGAwHtQagR1pXTbvw"
);
