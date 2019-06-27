const mongoose = require('mongoose');

const requiredStringValidator = [
  (val) => {
    const testVal = val.trim();
    return (testVal.length > 0);
  },
  'Please supply a value for {PATH}',
];

const standupSchema = new mongoose.Schema({
  teamMemberId: {
    // reference other documents within collection
    // store object id values to those in our document
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teamMembers',
  },
  teamMember: { type: String, required: true, validate: requiredStringValidator },
  project: { type: String, required: true, validate: requiredStringValidator },
  workYesterday: { type: String, required: true, validate: requiredStringValidator },
  workToday: { type: String, required: true, validate: requiredStringValidator },
  impediment: { type: String, required: true, default: 'None' },
  createdOn: { type: Date, default: Date.now },
});

// pass into mongoose model method two arguments:
// first being what we want to name our model
// second the defined schema
// exporting it for other files or modules that might require it
module.exports = mongoose.model('Standup', standupSchema);


// // Disabled _id schema example
// const noIdSchema = new mongoose.Schmea(
//   { name: String },
//   { _id: false }, // prevents mongoose from creating default _id field
// );

// // User Schema.add() example
// const exampleSchema = new mongoose.Schema();

// // if so desired, you can add fields into schema conditionally
// exampleSchema.add({ teamMember: String });

// const useFullName = true;

// if (useFullName) {
//   exampleSchema.add({
//     teamMember: {
//       first: String,
//       last: String,
//     },
//   });
// } else {
//   exampleSchema.add({
//     teamMember: String,
//   });
// }
