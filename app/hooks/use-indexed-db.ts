"use client";

import { useState, useEffect, useCallback } from "react";

interface UseIndexedDBReturn<T> {
  error: string | null;
  loading: boolean;
  getAll: () => Promise<T[]>;
  putItem: (item: T) => Promise<void>;
  deleteItem: (id: number) => Promise<void>;
  clear: () => Promise<void>;
}

export function useIndexedDB<T = any>(
  databaseName: string,
  storeName: string
): UseIndexedDBReturn<T> {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [db, setDb] = useState<IDBDatabase | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const request = indexedDB.open(databaseName, 1);

    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(storeName)) {
        // We set keyPath to 'id' so each snippet is indexed by its own ID
        database.createObjectStore(storeName, { keyPath: "id" });
      }
    };

    request.onsuccess = () => setDb(request.result);
    request.onerror = () => setError("Failed to open database");
  }, [databaseName, storeName]);

  const getAll = useCallback(async (): Promise<T[]> => {
    if (!db) return [];
    return new Promise((resolve) => {
      const transaction = db.transaction(storeName, "readonly");
      const request = transaction.objectStore(storeName).getAll();
      request.onsuccess = () => resolve(request.result);
    });
  }, [db, storeName]);

  const putItem = useCallback(async (item: T): Promise<void> => {
    if (!db) return;
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite");
      const request = transaction.objectStore(storeName).put(item);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }, [db, storeName]);

  const deleteItem = useCallback(async (id: number): Promise<void> => {
    if (!db) return;
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite");
      const request = transaction.objectStore(storeName).delete(id);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }, [db, storeName]);

  const clear = useCallback(async (): Promise<void> => {
    if (!db) return;
    return new Promise((resolve) => {
      const request = db.transaction(storeName, "readwrite").objectStore(storeName).clear();
      request.onsuccess = () => resolve();
    });
  }, [db, storeName]);

  return { error, loading, getAll, putItem, deleteItem, clear };
}