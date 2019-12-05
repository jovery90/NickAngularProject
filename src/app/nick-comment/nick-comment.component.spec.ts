import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NickCommentComponent } from './nick-comment.component';

describe('NickCommentComponent', () => {
  let component: NickCommentComponent;
  let fixture: ComponentFixture<NickCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NickCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NickCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
