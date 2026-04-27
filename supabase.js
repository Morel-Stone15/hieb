// supabase.js - Gestionnaire de base de données Supabase

// REMPLACEZ CES VALEURS PAR CELLES DE VOTRE PROJET SUPABASE
const SUPABASE_URL = 'https://twbudfzmiquqvsskojlt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3YnVkZnptaXF1cXZzc2tvamx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczMDMzMTYsImV4cCI6MjA5Mjg3OTMxNn0.zLtZbawfkJguJ9TLXlsiBxozm1x-ucdROY8wxOmr9rY';

// Assurez-vous que le script CDN de Supabase est inclus dans le HTML :
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fonctions génériques CRUD (Compatibilité avec l'ancien db.js)

export const getAll = async (storeName) => {
    const { data, error } = await supabase
        .from(storeName)
        .select('*');

    if (error) {
        console.error(`Erreur lors de la récupération de la table ${storeName}:`, error);
        return [];
    }
    return data;
};

export const addData = async (storeName, data) => {
    const { data: insertedData, error } = await supabase
        .from(storeName)
        .insert([data])
        .select();

    if (error) {
        console.error(`Erreur lors de l'ajout dans la table ${storeName}:`, error);
        throw error;
    }
    return insertedData ? insertedData[0] : null;
};

export const putData = async (storeName, data) => {
    const { data: upsertedData, error } = await supabase
        .from(storeName)
        .upsert(data)
        .select();

    if (error) {
        console.error(`Erreur lors de la mise à jour dans la table ${storeName}:`, error);
        throw error;
    }
    return upsertedData ? upsertedData[0] : null;
};

export const deleteData = async (storeName, id) => {
    const { error } = await supabase
        .from(storeName)
        .delete()
        .eq('id', id);

    if (error) {
        console.error(`Erreur lors de la suppression dans la table ${storeName}:`, error);
        throw error;
    }
    return true;
};

export default supabase;
