import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should have created warnings in storage', () => {
    [localStorage, sessionStorage].forEach(storage => {
      const warnings = Object.keys(storage).filter(k => k.startsWith(component['storageWarningPrefix']));
      expect(warnings.length > 0);
    });
  });

  describe('createStorageWarnings', () => {
    it('should clear out previous warnings', () => {
      const key = `${component['storageWarningPrefix']} TEST INSERT`;

      localStorage.setItem(key, 'foo');
      sessionStorage.setItem(key, 'foo');

      component['createStorageWarnings']();

      expect(localStorage.getItem(key)).toBeNull();
      expect(sessionStorage.getItem(key)).toBeNull();
    });
  });
});
