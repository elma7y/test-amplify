import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRoute2Component } from './test-route2.component';

describe('TestRoute2Component', () => {
  let component: TestRoute2Component;
  let fixture: ComponentFixture<TestRoute2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestRoute2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestRoute2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
