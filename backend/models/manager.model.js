const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

managerSchema.pre("save", function (next) {
  // create and update

  if (!this.isModified("password")) return next();
  // Store hash in your password DB.

  let hash = bcrypt.hashSync(this.password, 8)
    this.password = hash;
    return next();
  
});

managerSchema.methods.verifyPassword = function (password) {
   return bcript.compareSync(password,this.password)
};

module.exports = mongoose.model("user", managerSchema);