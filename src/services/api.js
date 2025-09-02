import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zbmmjbnacpjqpbqlufkf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpibW1qYm5hY3BqcXBicWx1ZmtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3ODgyOTksImV4cCI6MjA3MjM2NDI5OX0.Tefie4DuRxcRrNDHTWf4KnWPqErZrR7Oiq7-ofTgO7M';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const fetchCreators = async () => {
  const { data, error } = await supabase
    .from('creators')
    .select('*');
  if (error) throw error;
  return data;
};

export const fetchCreator = async (id) => {
  const { data, error } = await supabase
    .from('creators')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

export const addCreator = async (creator) => {
  const { data, error } = await supabase
    .from('creators')
    .insert([creator])
    .select();
  if (error) throw error;
  return data;
};

export const updateCreator = async (id, creator) => {
  const { data, error } = await supabase
    .from('creators')
    .update(creator)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data;
};

export const deleteCreator = async (id) => {
  const { data, error } = await supabase
    .from('creators')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return data;
};