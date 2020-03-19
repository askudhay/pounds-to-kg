import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Pound2kgPipe } from './pound2kg.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, Pound2kgPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render Kg', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;   
    expect(compiled.querySelector('.kgClass').value).toContain('68.0272');
  });

});

