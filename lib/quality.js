"use strict";

const QUALITY = {
  ID: Object.freeze({
    NORMAL: 0,
    GENUINE: 1,
    VINTAGE: 3,
    UNUSUAL: 5,
    UNIQUE: 6,
    COMMUNITY: 7,
    VALVE: 8,
    SELF_MADE: 9,
    STRANGE: 11,
    HAUNTED: 13,
    COLLECTORS: 14,
    DECORATED: 15,
  }),

  COLOR: Object.freeze({
    NORMAL: "#B2B2B2",
    GENUINE: "#4D7455",
    VINTAGE: "#476291",
    UNUSUAL: "#8650AC",
    UNIQUE: "#FFD700",
    COMMUNITY: "#70B04A",
    VALVE: "#A50F79",
    SELF_MADE: "#70B04A",
    STRANGE: "#CF6A32",
    HAUNTED: "#38F3AB",
    COLLECTORS: "#AA0000",
    DECORATED: "#FAFAFA",
  }),
};

module.exports = QUALITY;
