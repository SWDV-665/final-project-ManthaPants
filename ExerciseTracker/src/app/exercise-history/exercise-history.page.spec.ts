import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciseHistoryPage } from './exercise-history.page';

describe('ExerciseHistoryPage', () => {
  let component: ExerciseHistoryPage;
  let fixture: ComponentFixture<ExerciseHistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExerciseHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
