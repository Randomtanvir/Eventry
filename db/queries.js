import { eventModel } from "@/models/event-model";
import { userModel } from "@/models/user-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

export const getAllEvents = async (query) => {
  let allEvents = [];
  if (query) {
    const regex = new RegExp(query, "i");
    allEvents = await eventModel.find({ name: { $regex: regex } }).lean();
  } else {
    allEvents = await eventModel.find().lean();
  }

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

export const updateGiongIds = async (eventId, authId) => {
  const event = await eventModel.findById(eventId);
  event.going_ids.push(authId);
  await event.save();
};
