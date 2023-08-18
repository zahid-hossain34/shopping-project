export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public isSelected?: boolean = false;

  constructor(name: string, desc: string, imgPath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
  }
}
