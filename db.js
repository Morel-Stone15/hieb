// db.js - Gestionnaire de base de données IndexedDB simple
const DB_NAME = 'HiebDB';
const DB_VERSION = 1;

export const initDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            
            // Table Vendeurs
            if (!db.objectStoreNames.contains('vendeurs')) {
                db.createObjectStore('vendeurs', { keyPath: 'id', autoIncrement: true });
            }
            
            // Table Produits
            if (!db.objectStoreNames.contains('produits')) {
                db.createObjectStore('produits', { keyPath: 'id', autoIncrement: true });
            }
            
            // Table Commandes
            if (!db.objectStoreNames.contains('commandes')) {
                db.createObjectStore('commandes', { keyPath: 'id', autoIncrement: true });
            }

            // Table Categories
            if (!db.objectStoreNames.contains('categories')) {
                db.createObjectStore('categories', { keyPath: 'id', autoIncrement: true });
            }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
};

// Fonctions génériques CRUD
export const getAll = async (storeName) => {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
};

export const addData = async (storeName, data) => {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.add(data);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
};

export const putData = async (storeName, data) => {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.put(data);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
};

export const deleteData = async (storeName, id) => {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.delete(id);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
};

// Migration depuis localStorage
export const migrateFromLocalStorage = async () => {
    const sellers = JSON.parse(localStorage.getItem('local_users') || '[]');
    const products = JSON.parse(localStorage.getItem('local_products') || '[]');
    const orders = JSON.parse(localStorage.getItem('local_orders') || '[]');
    const categories = JSON.parse(localStorage.getItem('local_categories') || '[]');

    for (const s of sellers) await putData('vendeurs', s);
    for (const p of products) await putData('produits', p);
    for (const o of orders) await putData('commandes', o);
    for (const c of categories) await putData('categories', c);
    
    console.log("Migration terminée avec succès !");
};
