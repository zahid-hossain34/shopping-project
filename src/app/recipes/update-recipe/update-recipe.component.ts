import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css'],
})
export class UpdateRecipeComponent implements OnInit, OnDestroy {
  updateForm!: FormGroup | any;
  recipieupdateItem!: any;
  toNavigate: any;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.enableForm();
    this.setInitialValue();
  }
  ngOnDestroy(): void {
    clearTimeout(this.toNavigate);
  }
  setInitialValue() {
    this.route.params.subscribe((params) => {
      this.recipieupdateItem = this.recipeService.getRecipeById(params['id']);
      console.log(this.recipieupdateItem);
      this.updateForm.patchValue({
        name: this.recipieupdateItem.name,
        description: this.recipieupdateItem.description,
        imagePath: this.recipieupdateItem.imagePath,
        ingredients: this.recipieupdateItem.ingredients,
      });
    });
  }
  enableForm() {
    this.updateForm = new FormGroup({
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
    if (this.updateForm.valid) {
      const recipeFormValue: Recipe = {
        id: this.recipieupdateItem.id,
        isSelected: this.recipieupdateItem.isSelected,
        ...this.updateForm.value,
      };
      this.recipeService.updateRecipe(
        this.recipieupdateItem.id,
        recipeFormValue
      );
      this.toNavigate = setTimeout(() => {
        this.router.navigate(['/recipes/' + this.recipieupdateItem.id]);
      }, 1000);
    }
  }
  onAddIngredient() {
    (<FormArray>this.updateForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, Validators.required),
      })
    );
  }
  onDeleteIngrident(index: number) {
    (<FormArray>this.updateForm.get('ingredients')).removeAt(index);
  }
  onCancel() {
    this.router.navigate(['/recipes/' + this.recipieupdateItem.id]);
  }
}
