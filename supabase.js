import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://bjzrqtzcmyulajloqqgx.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqenJxdHpjbXl1bGFqbG9xcWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwNzY4NjUsImV4cCI6MjAyNDY1Mjg2NX0.5xGjN_rKnTiGCy2KIXCWCxiWMcI4KSPTiV2IXan_iw8"
const supabase = createClient(supabaseUrl, supabaseKey)


// async function signUpNewUser(info) {
//   const { data, error } = await supabase.auth.signUp(info)
//   return { data  }
// }

  


// async function getUser() {
//   const { data, error } = await supabase
//   .from('users')
//   .select()
//   return { data, error }
// }


async function getClient (){
  const { data, error } = await supabase
  .from ('inscription')
  .select ()
  return {data, error}
}


async function addClient (info){

  const {data, error} = await supabase
  .from ('inscription')
  .insert (info)
  .select ()
  return { data, error }
}

export {addClient, getClient}
