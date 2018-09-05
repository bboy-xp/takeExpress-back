module.exports = app => {
  const mongoose = app.mongoose;
  const OrderSchema = new mongoose.Schema({
    position: { type: String },
    phoneNumber: { type: String },
    isTaken: { type: Boolean },
  }, {
      timestamps: true,
    });

  return mongoose.model('Order', OrderSchema);
}