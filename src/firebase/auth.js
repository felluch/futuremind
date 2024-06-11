import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const logIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.error("Error logging in:", error);
    return false;
  }
};