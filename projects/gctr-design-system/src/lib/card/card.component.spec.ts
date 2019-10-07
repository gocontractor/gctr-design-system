import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default class', () => {
    de = fixture.debugElement.query(By.css('div'));
    expect(de.nativeElement.className).toContain('gctr-card');
  });

  it('should show clases if variable is filled', () => {
    component.cssClass = 'new-class';
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.gctr-card'));
    expect(de.nativeElement.className).toContain('new-class');
  });

});
