import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
  AsyncValidatorFn
} from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import {MusicService} from './music.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'search-form',
  template: `
    <form [formGroup]="queryForm">
      <div class="input-group mb-2">
        <input type="text" class="form-control"
               formControlName="query"
               placeholder="Search for..."
               #queryRef>
        <div *ngIf="query.dirty || query.touched">
          <div *ngIf="query.errors?.required">
            Field is required
          </div>
          <div *ngIf="query.errors?.minlength">
            Field has to have {{query.errors.minlength.requiredlength}}
          </div>
          <div *ngIf="query.errors?.bad_word">
            Bad word: {{query.errors.bad_word}}
          </div>
        </div>
      </div>
    </form>
  `,
  styles: [
      `
      form .ng-invalid.ng-touched, form .ng-invalid.ng-dirty {
        border: 1px solid red !important;
      }
    `
  ]
})
export class SearchFormComponent implements OnInit {
  queryForm: FormGroup;

  get query() {
    return this.queryForm.get('query');
  }

  constructor(private builder: FormBuilder, private music: MusicService) {

    const censor = (badword: string): ValidatorFn =>
      (control: AbstractControl): (ValidationErrors | null) => {
        const isError = control.value.indexOf(badword) !== -1;
        return isError ? {
          'bad_word': badword
        } : null;
      };

    const asyncCensor = (badword: string): AsyncValidatorFn =>
      (control: AbstractControl) => {
        return Observable.create(observer => {
          const isError = control.value.indexOf(badword) !== -1;

          setTimeout(() => {
            observer.next(isError ? {
              'bad_word': badword
            } : null);
            observer.complete();
          }, 2000);
        });
      };


    this.queryForm = builder.group({
      query: builder.control('', [
        Validators.required,
        Validators.minLength(3),
        censor('batman')
      ], [
        asyncCensor('superman')
      ])
    });

    console.log(this.queryForm);

    this.queryForm
      .get('query')
      .valueChanges
      .debounceTime(400)
      .filter(query => query.length >= 3)
      .distinctUntilChanged()
      .subscribe(query => this.search(query));
  }

  ngOnInit() {
  }

  search(query) {
    this.music.search(query);
  }

}
