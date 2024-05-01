import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpc3VzcXJoY290Ymthd3BvYXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0Nzg2MjgsImV4cCI6MjAzMDA1NDYyOH0.hwXszZ1rWCkI1O7jnuTKxx4FIkJQPd9Ch--gkLRdZ_0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://pisusqrhcotbkawpoasg.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpc3VzcXJoY290Ymthd3BvYXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0Nzg2MjgsImV4cCI6MjAzMDA1NDYyOH0.hwXszZ1rWCkI1O7jnuTKxx4FIkJQPd9Ch--gkLRdZ_0'
// const supabase = createClient(supabaseUrl, supabaseKey)


// export default supabase;