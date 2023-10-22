import express from "express";
import * as models from "../models/follow";
export const createFollow = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await models.createFollow(req.body);
    res.status(200).json({ message: "Followed successfully", result });
  } catch (error) {
    res.status(500).send(error);
  }
};
export const deleteFollow = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await models.deleteFollow(req.body);
    res.status(200).json({ message: "Unfollowed successfully", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getFollower = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await models.getFollowers(req.params.id);
    res.status(200).json({ message: "Fetched successfully", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getFollowing = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await models.getFollowing(req.params.id);
    res.status(200).json({ message: "Fetched successfully", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const checkFollowing = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await models.checkFollowing(req.body);
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).send(error);
  }
};
