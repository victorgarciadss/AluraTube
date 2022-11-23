import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://xqnaeuldjbigudgzxiyi.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxbmFldWxkamJpZ3VkZ3p4aXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMjc3NjMsImV4cCI6MTk4MzgwMzc2M30.e9I1HTctGxCgtuJ5h2Yd-ssLG-i3or3WEx4qVFmD9Jw";

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

const videoService = () => {
    return {
        getAllVideos() {

            return supabase.from("videos")
                    .select("*");
                    
        }
    }
}

export default videoService;