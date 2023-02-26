import { NestFactory } from '@nestjs/core';
import mongoose from 'mongoose';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

mongoose.connect("mongodb+srv://test:test@cluster0.07x7ewo.mongodb.net/firstDatabase?retryWrites=true&w=majority")
  .then(() => console.log('Connected!'))
  .catch((err) => {
    console.log(err)
  });