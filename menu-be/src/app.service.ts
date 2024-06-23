import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { isNil } from 'lodash-es';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  async getMenu() {
    return await prisma.dish.findMany();
  }

  async getCart() {
    let cart = await prisma.cart.findFirst();

    if (isNil(cart)) {
      try {
        cart = await prisma.cart.create({
          data: {},
        });
      } catch (error) {
        throw new InternalServerErrorException('Could not find or create cart');
      }
    }

    const cartItems = await prisma.cartItem.findMany({
      where: {
        cartId: cart.id,
      },
      include: {
        dish: true,
      },
    });
    return {
      id: cart.id,
      items: cartItems.map((item) => ({
        id: item.id,
        dishId: item.dish.id,
        name: item.dish.name,
        amount: item.amount,
        price: item.dish.price,
      })),
    };
  }

  async addToCart(dishId: number) {
    let cart = await prisma.cart.findFirst();

    if (isNil(cart)) {
      try {
        cart = await prisma.cart.create({
          data: {},
        });
      } catch (error) {
        throw new InternalServerErrorException('Could not find or create cart');
      }
    }

    let cartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        dishId: dishId,
      },
      include: {
        dish: true,
      },
    });

    if (isNil(cartItem)) {
      try {
        cartItem = await prisma.cartItem.create({
          data: {
            dishId: dishId,
            amount: 1,
            cartId: cart.id,
          },
          include: {
            dish: true,
          },
        });
      } catch (error) {
        throw new InternalServerErrorException('Could not add item to cart');
      }
    }

    return {
      id: cartItem.id,
      dishId: cartItem.dish.id,
      name: cartItem.dish.name,
      amount: cartItem.amount,
      price: cartItem.dish.price,
    };
  }
}
