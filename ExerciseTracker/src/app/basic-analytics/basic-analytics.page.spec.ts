import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicAnalyticsPage } from './basic-analytics.page';

describe('BasicAnalyticsPage', () => {
  let component: BasicAnalyticsPage;
  let fixture: ComponentFixture<BasicAnalyticsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasicAnalyticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
