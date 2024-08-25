// src/db.js
import {supabase} from './supabaseClient';

export async function insertProfile(userId, name) {
  const { data, error } = await supabase
    .from('profiles')
    .insert([{ user_id: userId, name }]);
  if (error) {
    console.error('Insert Profile Error:', error.message);
    return null;
  }
  return data;
}

export async function getProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .single();
  if (error) {
    console.error('Get Profile Error:', error.message);
    return null;
  }
  return data;
}
