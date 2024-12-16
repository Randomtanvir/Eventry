"use server";

import {
  createUser,
  foundUserByCredential,
  updateInterest,
} from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const registerUser = async (formData) => {
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  console.log(created);
  redirect("/login");
};

export const perfomeLogin = async (formData) => {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const found = await foundUserByCredential(credential);
    return found;
  } catch (error) {
    throw error;
  }
};

export const addInterestedEvent = async (eventId, authId) => {
  try {
    await updateInterest(eventId, authId);
  } catch (error) {
    throw error;
  }
  revalidatePath("/");
};
