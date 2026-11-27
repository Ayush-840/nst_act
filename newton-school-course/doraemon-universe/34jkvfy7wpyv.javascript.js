// 1. Insert the Doraemon document with embedded gadget subdocuments
db.characters.insertOne({
  name: "Doraemon",
  type: "Robot Cat",
  gadgets: [
    { gadget_name: "Take-copter", level: 5 },
    { gadget_name: "Anywhere Door", level: 4 }
  ]
});

// 2. Find all characters who have the gadget "Anywhere Door"
db.characters.find({
  "gadgets.gadget_name": "Anywhere Door"
});

// 3. Increase the level of the "Take-copter" gadget by 1
db.characters.updateOne(
  { "gadgets.gadget_name": "Take-copter" },
  { $inc: { "gadgets.$.level": 1 } }
);