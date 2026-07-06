/* Loopwerk — Supabase publieke config.
   Veilig om publiek te tonen: dit is de anon-key en de tabel 'leads' staat via RLS
   alleen INSERT toe (geen lezen). Lezen van leads gebeurt beveiligd via de service role. */
window.LOOPWERK_SUPABASE = {
  url: "https://cslqtqxghgsocejvvvdb.supabase.co",
  key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzbHF0cXhnaGdzb2NlanZ2dmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4ODc0MzgsImV4cCI6MjA5NjQ2MzQzOH0._oVIbHP8Wbu8zsEJUbkrfL-1KFoeF8FG5aZo202Ycpg"
};
