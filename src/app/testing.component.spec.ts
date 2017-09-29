import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TestingComponent} from './testing.component';
import {By} from "@angular/platform-browser";

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestingComponent],
      imports: [],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text', () => {
    expect(fixture.debugElement.query(By.css('p'))
      .nativeElement.textContent).toEqual('testing Works!');
  });
});
