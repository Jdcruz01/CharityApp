import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApaddescripninoscausasPage } from './apaddescripninoscausas.page';

describe('ApaddescripninoscausasPage', () => {
  let component: ApaddescripninoscausasPage;
  let fixture: ComponentFixture<ApaddescripninoscausasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApaddescripninoscausasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApaddescripninoscausasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
