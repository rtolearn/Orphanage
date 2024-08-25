// src/auth.js
import {supabase} from './supabaseClient';

export async function signUp(signUpIndividual) {


  const {email, password} = signUpIndividual.value;

  const { user, error } = await supabase.auth.signUp({ email , password });
  if (error) {
    console.error('Sign Up Error:', error.message);
    return null;
  }



  // Add additional user data to the profiles table
  const { data, profileError } = await supabase
    .from('Profiles')
    .insert({
      user_id: user.id,
      first_name: signUpIndividual.value.first_name,
      last_name: signUpIndividual.value.last_name,
      age: signUpIndividual.value.age,
      gender: signUpIndividual.value.gender,
      state: signUpIndividual.value.state,
      phone_number: signUpIndividual.value.phone_number,
      address: signUpIndividual.value.address,
    });

  if (profileError) {
    console.error('Profile Error:', profileError.message);
    return null;
  }

  return {user, Profile: data};

}

export async function signIn(email, password) {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    console.error('Sign In Error:', error.message);
    return null;
  }
  return user;
}

export function getSession() {
  return supabase.auth.getSession();
}
