module.exports = {
  type: "object",
  additionalProperties: false,
  required: true,
  properties: {
    sportId: { type: "string", required: true },
    sportName: { type: "string", required: true },
    rank: { type: "number", required: true },
    sportCovers: { type: "array", items: { type: "string" }, required: true },
  },
};
