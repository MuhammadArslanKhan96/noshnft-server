import express from "express";
import {
  checkFollowing,
  createFollow,
  deleteFollow,
  getFollowers,
  getFollowing,
} from "../models/follow";
export const createFollowController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await createFollow(req.body);
    res.status(200).json({ message: "Followed successfully", result });
  } catch (error) {
    res.status(500).send(error);
  }
};
export const deleteFollowController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await deleteFollow(req.body);
    res.status(200).json({ message: "Unfollowed successfully", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getFollowerController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await getFollowers(req.params.id);
    res.status(200).json({ message: "Fetched successfully", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getFollowingController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await getFollowing(req.params.id);
    res.status(200).json({ message: "Fetched successfully", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const checkFollowingController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await checkFollowing(req.body);
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).send(error);
  }
};
