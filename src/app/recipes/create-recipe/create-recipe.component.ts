import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent implements OnInit {
  createForm!: FormGroup | any;
  recipeId: number = 2;
  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit() {
    this.enableForm();
    // console.log(this.createForm);
  }
  enableForm() {
    this.createForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      imagePath: new FormControl(null, Validators.required),
      ingredients: new FormArray([
        new FormGroup({
          name: new FormControl(null, Validators.required),
          amount: new FormControl(null, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/),
          ]),
        }),
      ]),
    });
  }
  onSubmite() {
    if (this.createForm.valid) {
      const recipeFormValue: Recipe = {
        id: 3,
        isSelected: false,
        ...this.createForm.value,
      };
      this.recipeService.addrecipie(recipeFormValue);
      this.createForm.reset();
    }
  }
  onAddIngredient() {
    (<FormArray>this.createForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, Validators.required),
      })
    );
  }
  onDeleteIngrident(index: number) {
    (<FormArray>this.createForm.get('ingredients')).removeAt(index);
  }
  onCancel() {
    this.router.navigate(['/recipes']);
  }
}
