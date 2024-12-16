import { eventModel } from "@/models/event-model";
import { userModel } from "@/models/user-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";
import mongoose from "mongoose";

export const getAllEvents = async () => {
  const allEvents = await eventModel.find().lean();

  return replaceMongoIdInArray(allEvents);
};

export const getEvenById = async (eventId) => {
  const event = await eventModel.findById(eventId).lean();

  return replaceMongoIdInObject(event);
};

export const createUser = async (user) => {
  return await userModel.create(user);
};

export const foundUserByCredential = async (credentials) => {
  const user = await userModel.findOne(credentials).lean();
  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
};

export const updateInterest = async (eventId, authId) => {
  const event = await eventModel.findById(eventId);

  if (event) {
    const foundUsers = event.interested_ids.find((id) => id === authId);

    if (foundUsers) {
      event.interested_ids.pull(authId);
    } else {
      event.interested_ids.push(authId);
    }

    await event.save();
  }
};
