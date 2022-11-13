import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://fphonncalmzfcslxxajf.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwaG9ubmNhbG16ZmNzbHh4YWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMjEwODYsImV4cCI6MTk4Mzc5NzA4Nn0.r8nAVgHjQMXKXSZ3Hueqcb4w0ccEN6RGrRqOcVC3elA";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}
