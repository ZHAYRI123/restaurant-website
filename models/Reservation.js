import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  persons: { type: Number, required: true }
});

export default mongoose.model('Reservation', ReservationSchema);