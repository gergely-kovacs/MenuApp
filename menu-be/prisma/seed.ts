import { PrismaClient, Unit } from '@prisma/client';

const prisma = new PrismaClient();

export const recipes = [
  {
    name: 'Francia krémes',
    price: 420,
    lactoseFree: false,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '2 pc' },
      { name: 'sugar', amount: '1000 g' },
      { name: 'fruit', amount: '60 g' },
      { name: 'milk', amount: '1000 ml' },
      { name: 'butter', amount: '70 g' },
      { name: 'flour', amount: '300 g' },
    ],
  },
  {
    name: 'Gesztenyés krémes',
    price: 500,
    lactoseFree: false,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '6 pc' },
      { name: 'sugar', amount: '600 g' },
      { name: 'milk', amount: '200 ml' },
      { name: 'butter', amount: '70 g' },
      { name: 'flour', amount: '1000 g' },
    ],
  },
  {
    name: 'Csokis krémes',
    price: 500,
    lactoseFree: false,
    glutenFree: true,
    ingredients: [
      { name: 'egg', amount: '2 pc' },
      { name: 'sugar', amount: '300 g' },
      { name: 'fruit', amount: '70 g' },
      { name: 'vanilin sugar', amount: '60 g' },
      { name: 'chocolate', amount: '10 g' },
      { name: 'milk', amount: '400 ml' },
      { name: 'butter', amount: '50 g' },
      { name: 'gluten-free flour', amount: '700 g' },
    ],
  },
  {
    name: 'Gyümölcsös krémes',
    price: 450,
    lactoseFree: true,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '7 pc' },
      { name: 'sugar', amount: '300 g' },
      { name: 'fruit', amount: '60 g' },
      { name: 'vanilin sugar', amount: '80 g' },
      { name: 'soy-milk', amount: '600 ml' },
      { name: 'flour', amount: '1000 g' },
    ],
  },
  {
    name: 'Rigó Jancsi',
    price: 450,
    lactoseFree: true,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '3 pc' },
      { name: 'sugar', amount: '600 g' },
      { name: 'chocolate', amount: '100 g' },
      { name: 'soy-milk', amount: '200 ml' },
      { name: 'flour', amount: '900 g' },
    ],
  },
  {
    name: 'Tiramisu',
    price: 600,
    lactoseFree: false,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '3 pc' },
      { name: 'sugar', amount: '400 g' },
      { name: 'fruit', amount: '80 g' },
      { name: 'vanilin sugar', amount: '20 g' },
      { name: 'milk', amount: '800 ml' },
      { name: 'butter', amount: '60 g' },
      { name: 'flour', amount: '500 g' },
    ],
  },
  {
    name: 'Rákóczi túrós',
    price: 500,
    lactoseFree: true,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '6 pc' },
      { name: 'sugar', amount: '200 g' },
      { name: 'fruit', amount: '10 g' },
      { name: 'vanilin sugar', amount: '70 g' },
      { name: 'chocolate', amount: '20 g' },
      { name: 'soy-milk', amount: '300 ml' },
      { name: 'flour', amount: '800 g' },
    ],
  },
  {
    name: 'Isler',
    price: 500,
    lactoseFree: false,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '2 pc' },
      { name: 'sugar', amount: '400 g' },
      { name: 'fruit', amount: '80 g' },
      { name: 'milk', amount: '500 ml' },
      { name: 'butter', amount: '50 g' },
      { name: 'flour', amount: '900 g' },
    ],
  },
  {
    name: 'Mákos habos',
    price: 550,
    lactoseFree: true,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '4 pc' },
      { name: 'sugar', amount: '100 g' },
      { name: 'vanilin sugar', amount: '10 g' },
      { name: 'soy-milk', amount: '800 ml' },
      { name: 'flour', amount: '900 g' },
    ],
  },
  {
    name: 'Képviselőfánk',
    price: 700,
    lactoseFree: false,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '1 pc' },
      { name: 'sugar', amount: '900 g' },
      { name: 'vanilin sugar', amount: '60 g' },
      { name: 'milk', amount: '600 ml' },
      { name: 'butter', amount: '90 g' },
      { name: 'flour', amount: '500 g' },
    ],
  },
  {
    name: 'Ekler fánk',
    price: 700,
    lactoseFree: false,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '4 pc' },
      { name: 'sugar', amount: '100 g' },
      { name: 'vanilin sugar', amount: '20 g' },
      { name: 'chocolate', amount: '80 g' },
      { name: 'milk', amount: '900 ml' },
      { name: 'butter', amount: '20 g' },
      { name: 'flour', amount: '1000 g' },
    ],
  },
  {
    name: 'Flódni',
    price: 580,
    lactoseFree: true,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '8 pc' },
      { name: 'sugar', amount: '400 g' },
      { name: 'vanilin sugar', amount: '20 g' },
      { name: 'chocolate', amount: '100 g' },
      { name: 'soy-milk', amount: '600 ml' },
      { name: 'flour', amount: '800 g' },
    ],
  },
  {
    name: 'Zserbó',
    price: 520,
    lactoseFree: false,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '10 pc' },
      { name: 'sugar', amount: '200 g' },
      { name: 'fruit', amount: '40 g' },
      { name: 'chocolate', amount: '30 g' },
      { name: 'milk', amount: '1000 ml' },
      { name: 'butter', amount: '80 g' },
      { name: 'flour', amount: '500 g' },
    ],
  },
  {
    name: 'Mézes krémes',
    price: 450,
    lactoseFree: false,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '8 pc' },
      { name: 'sugar', amount: '700 g' },
      { name: 'vanilin sugar', amount: '80 g' },
      { name: 'milk', amount: '900 ml' },
      { name: 'butter', amount: '60 g' },
      { name: 'flour', amount: '300 g' },
    ],
  },
  {
    name: 'Túrós pite',
    price: 450,
    lactoseFree: false,
    glutenFree: true,
    ingredients: [
      { name: 'egg', amount: '7 pc' },
      { name: 'sugar', amount: '300 g' },
      { name: 'chocolate', amount: '60 g' },
      { name: 'milk', amount: '600 ml' },
      { name: 'butter', amount: '60 g' },
      { name: 'gluten-free flour', amount: '600 g' },
    ],
  },
  {
    name: 'Meggyes pite',
    price: 450,
    lactoseFree: true,
    glutenFree: true,
    ingredients: [
      { name: 'egg', amount: '3 pc' },
      { name: 'sugar', amount: '800 g' },
      { name: 'vanilin sugar', amount: '50 g' },
      { name: 'chocolate', amount: '10 g' },
      { name: 'soy-milk', amount: '800 ml' },
      { name: 'gluten-free flour', amount: '700 g' },
    ],
  },
  {
    name: 'Linzerkarika',
    price: 380,
    lactoseFree: true,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '2 pc' },
      { name: 'sugar', amount: '200 g' },
      { name: 'vanilin sugar', amount: '30 g' },
      { name: 'chocolate', amount: '70 g' },
      { name: 'soy-milk', amount: '300 ml' },
      { name: 'flour', amount: '300 g' },
    ],
  },
  {
    name: 'Kókusz golyó',
    price: 320,
    lactoseFree: false,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '7 pc' },
      { name: 'sugar', amount: '800 g' },
      { name: 'fruit', amount: '10 g' },
      { name: 'milk', amount: '800 ml' },
      { name: 'butter', amount: '80 g' },
      { name: 'flour', amount: '900 g' },
    ],
  },
  {
    name: 'Borzaska',
    price: 350,
    lactoseFree: false,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '8 pc' },
      { name: 'sugar', amount: '600 g' },
      { name: 'vanilin sugar', amount: '70 g' },
      { name: 'chocolate', amount: '100 g' },
      { name: 'milk', amount: '500 ml' },
      { name: 'butter', amount: '60 g' },
      { name: 'flour', amount: '500 g' },
    ],
  },
  {
    name: 'Gesztenye szív',
    price: 420,
    lactoseFree: false,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '1 pc' },
      { name: 'sugar', amount: '1000 g' },
      { name: 'fruit', amount: '70 g' },
      { name: 'chocolate', amount: '10 g' },
      { name: 'milk', amount: '500 ml' },
      { name: 'butter', amount: '60 g' },
      { name: 'flour', amount: '900 g' },
    ],
  },
  {
    name: 'Minyon',
    price: 450,
    lactoseFree: false,
    glutenFree: false,
    ingredients: [
      { name: 'egg', amount: '10 pc' },
      { name: 'sugar', amount: '800 g' },
      { name: 'chocolate', amount: '90 g' },
      { name: 'milk', amount: '500 ml' },
      { name: 'butter', amount: '100 g' },
      { name: 'flour', amount: '600 g' },
    ],
  },
];

recipes.forEach(async (recipe) => {
  await prisma.dish.upsert({
    where: { name: recipe.name },
    create: {
      name: recipe.name,
      price: recipe.price,
      isGlutenFree: recipe.glutenFree,
      isLactoseFree: recipe.lactoseFree,
    },
    update: {},
  });

  recipe.ingredients.forEach(async (ingredient) => {
    await prisma.ingredient.upsert({
      where: { name: ingredient.name },
      create: { name: ingredient.name },
      update: {},
    });
  });
});

const dishes = await prisma.dish.findMany();
const ingredients = await prisma.ingredient.findMany();

function parseUnit(unit: string) {
  switch (unit) {
    case 'g':
      return Unit.Gram;
    case 'ml':
      return Unit.Milliliter;
    case 'pc':
      return Unit.Pieces;
    default:
      throw new Error(`Unknown unit: ${unit}`);
  }
}

recipes.forEach(async (recipe) => {
  recipe.ingredients.forEach(async (ingredient) => {
    const dishId = dishes.find((d) => d.name === recipe.name)?.id;
    const ingredientId = ingredients.find(
      (i) => i.name === ingredient.name,
    )?.id;
    const [amount, unit] = ingredient.amount.split(' ');

    if (!dishId || !ingredientId) {
      throw new Error(
        `Dish or Ingredient not found for: ${recipe.name} - ${ingredient.name}`,
      );
    }

    await prisma.dishIngredient.upsert({
      where: {
        dishId_ingredientId: {
          dishId: dishId,
          ingredientId: ingredientId,
        },
      },
      create: {
        dishId: dishId,
        ingredientId: ingredientId,
        amount: Number(amount),
        unit: parseUnit(unit),
      },
      update: {},
    });
  });
});
