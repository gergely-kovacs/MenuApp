import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service.js';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/menu')
  async getHello() {
    return await this.appService.getMenu();
  }

  @Get('/cart')
  async getCart() {
    return await this.appService.getCart();
  }

  @Post('/cart')
  async addToCart(@Req() request: Request) {
    return await this.appService.addToCart(request.body.dishId);
  }
}
