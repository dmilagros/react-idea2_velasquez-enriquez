import { setDoc, doc, getDoc, updateDoc, arrayUnion, getDocs, collection, query, where } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import { db } from "./firebase.config";

export const uploadDocToFirebase = async (data) => {
  const customId = uuidv4();
  try {
    const docRef = await setDoc(doc(db, "products", customId), data);
    return docRef;
  } catch (e) {
    console.log("Error adding document: ", e.message);
  }
};

export const startReadDocFirebase = async (id) => {
  if (id) {
    const snap = await getDoc(doc(db, "products", id));
    if (snap.exists()) {
      return {id: id, ...snap.data()}
    } else {
      return [];
    }
  }
};

export const startUpdateArrayinDocFirebase = async (id, codes) => {
  if (id && codes.length > 0) {
    // Atomically add a new item to the "codes" array field.
    try {
      const docRef = await updateDoc(doc(db, "products", id), {
        codes: arrayUnion(...codes),
      });
      return docRef.data();
    } catch (e) {
      console.log("Error adding document: ", e.message);
    }
  }
};

export const startListProducts = async () => {
  try {
    const productsSnapshot = await getDocs(collection(db, "products"));
    const productList = productsSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    return productList;
  } catch (e) {
    console.log("Error listing document: ", e.message);
  }
};

export const startListProductsxCategory = async (categoryId) => {
  try {
    const productsCollection = collection(db, "products")
    const q = query(productsCollection, where("category", "==", categoryId));
    const productsSnapshot = await getDocs(q);
    const productList = productsSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));

    return productList;
  } catch (e) {
    console.log("Error listing document: ", e.message);
  }
};


export const startReadCategoryDocFirebase = async (id) => {
  if (id) {
    const snap = await getDoc(doc(db, "categories", id));

    if (snap.exists()) {
      return snap.data();
    } else {
      return [];
    }
  }
};

export const startListCategories = async () => {
  try {
    const categoriesSnapshot = await getDocs(collection(db, "categories"));
    const categoryList = categoriesSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    return categoryList;
  } catch (e) {
    console.log("Error adding document: ", e.message);
  }
};
