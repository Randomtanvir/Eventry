"use server";

import Email from "@/components/payment/Email";
import {
  createUser,
  foundUserByCredential,
  getEvenById,
  updateGiongIds,
  updateInterest,
} from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";

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

export const addGoingEvent = async (eventId, user) => {
  try {
    await updateGiongIds(eventId, user?.id);
    await sendEmail(eventId, user);
  } catch (error) {
    throw error;
  }
  revalidatePath("/");
  redirect("/");
};

const sendEmail = async (eventId, user) => {
  try {
    const event = await getEvenById(eventId);
    const resend = new Resend(process.env.RESEND_API_KEY);
    const message = `Dear ${user?.name}, you have been successfully registered for the event, ${event?.name}. Please carry this email and your official id to the venue. We are excited to have you here.`;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: user?.email,
      subject: "Payment Success.",
      react: Email({ message }),
    });
  } catch (error) {
    throw error;
  }
};
