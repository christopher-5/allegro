import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import mongoose from 'mongoose';
import { AppService } from './app.service';
import  User  from './models/user.model';
import { Delete, Param } from '@nestjs/common/decorators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('add')
  addUser(@Body() body: typeof User): any {
    console.log(body)
    const { name } = body;
    

    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name
    })
    return user.save();
  }

  @Get(':id')
  getUSer(@Param() params): any {
    console.log(User.findById(params.id))
    return User.findById(params.id)
  }

  @Put('update')
  async updateUser(@Body() body) {
    const userFromDB = await User.findById(body._id)
    console.log(userFromDB)
    userFromDB.set(body);
    return userFromDB.save();
  }

  @Delete('delete')
  deleteUser(@Body() body) {
    return User.findByIdAndDelete(body._id)
  }
}
