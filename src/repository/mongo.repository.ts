import mongoose from 'mongoose';

mongoose.connect('"mongodb+srv://cluster0.07x7ewo.mongodb.net/firstDatabase" --apiVersion 1 --username test')
  .then(() => console.log('Connected!'))
  .catch((err) => {
    console.log(err)
  });