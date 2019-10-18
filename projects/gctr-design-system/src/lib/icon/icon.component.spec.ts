import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconComponent } from '../icon/icon.component';
import { MatTooltipModule } from '@angular/material';
import { DebugElement } from '@angular/core';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        IconComponent
      ],
      imports: [
        MatTooltipModule
      ]
    });

    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Icon size', () => {

    it('should show default icon size if its variable is empty', () => {
      de = fixture.debugElement.query(By.css('i'));
      expect(de.nativeElement.className).toContain('small');
    });

    it('should show specific icon size class if its variable is passed', () => {
      component.size = 'big';
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('i'));
      expect(de.nativeElement.className).toContain('big');
    });

  });

  describe('Icon font family', () => {

    it('should show default iconFont if its variable is empty', () => {
      de = fixture.debugElement.query(By.css('i'));
      expect(de.nativeElement.className).toContain('material-icons');
    });

    it('should show specific iconFont if its variable is passed', () => {
      component.iconFont = 'font-awesome-brand';
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('i'));
      expect(de.context.iconFont).toBe('font-awesome-brand');
    });

  });

  describe('Icon text', () => {

    it('should show icon text if iconFont is empty', () => {
      component.icon = 'icon-name';
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('i'));
      expect(de.nativeElement.textContent).toBe('icon-name');
    });

    it('should show icon text if iconFont is material-icons', () => {
      component.iconFont = 'material-icons';
      component.icon = 'icon-name';
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('i'));
      expect(de.nativeElement.textContent).toBe('icon-name');
    });

    it('should show icon text if iconFont is glyphicon', () => {
      component.iconFont = 'glyphicon';
      component.icon = 'icon-name';
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('i'));
      expect(de.nativeElement.textContent).toBe('icon-name');
    });

    it('should NOT show icon text if iconFont is font-awesome', () => {
      component.iconFont = 'font-awesome-brand';
      component.icon = 'icon-name';
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('i'));
      expect(de.nativeElement.textContent).toBe('');
    });

    it('should NOT show icon text if iconFont is gctr', () => {
      component.iconFont = 'gctr';
      component.icon = 'icon-name';
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('i'));
      expect(de.nativeElement.textContent).toBe('');
    });

    it('should NOT show icon text if iconFont is material outlined', () => {
      component.iconFont = 'material-outlined';
      component.icon = 'icon-name';
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('i'));
      expect(de.nativeElement.textContent).toBe('');
    });

  });

  describe('Function getIconClasses', () => {

    it('should return default icon class when iconFont is empty', () => {
      const iconClasses = component.iconClasses;
      expect(iconClasses).toContain('material-icons');
    });

    it('should return font awesome icon class when iconFont is font-awesome brand', () => {
      component.iconFont = 'font-awesome-brand';
      fixture.detectChanges();
      const iconClasses = component.iconClasses;
      expect(iconClasses).toContain('fab');
    });

    it('should return font awesome icon class when iconFont is font-awesome solid', () => {
      component.iconFont = 'font-awesome-solid';
      fixture.detectChanges();
      const iconClasses = component.iconClasses;
      expect(iconClasses).toContain('fas');
    });

    it('should return glyphicon icon class when iconFont is glyphicon', () => {
      component.iconFont = 'glyphicon';
      fixture.detectChanges();
      const iconClasses = component.iconClasses;
      expect(iconClasses).toContain('glyphicon');
    });

    it('should return gctr icon class when iconFont is gctr', () => {
      component.iconFont = 'gctr';
      fixture.detectChanges();
      const iconClasses = component.iconClasses;
      expect(iconClasses).toContain('gctr-icons');
    });

  });

  describe('Function showText', () => {

    it('should return false if iconFont is gctr', () => {
      component.iconFont = 'gctr';
      fixture.detectChanges();
      const showText = component.showText;
      expect(showText).toBeFalsy();
    });

    it('should return false if iconFont is font-awesome', () => {
      component.iconFont = 'font-awesome-brand';
      fixture.detectChanges();
      const showText = component.showText;
      expect(showText).toBeFalsy();
    });

    it('should return true if iconFont is any other font than font-awesome', () => {
      component.iconFont = 'glyphicon';
      fixture.detectChanges();
      const showText = component.showText;
      expect(showText).toBeTruthy();
    });

    it('should return true if iconFont is empty', () => {
      const showText = component.showText;
      expect(showText).toBeTruthy();
    });

  });

});

