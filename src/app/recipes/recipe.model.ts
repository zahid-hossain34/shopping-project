import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public id?: string;
  public name: string;
  public description: string;
  public imagePath: string;
  public isSelected?: boolean = false;
  public ingredients?: Ingredient[];

  constructor(
    id: string,
    name: string,
    desc: string,
    imgPath: string,
    ingredients?: Ingredient[]
  ) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
    this.ingredients = ingredients;
  }
}
