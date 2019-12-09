import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentService } from '../comment.service';
import { NickCommentComponent } from './nick-comment.component';

describe('NickCommentComponent', () => {
  let component: NickCommentComponent;
  let fixture: ComponentFixture<NickCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NickCommentComponent ],
      providers: [CommentService],
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

  it('should clear item list when clearAll() is called', () => {

    component.items = ['a'];
    expect(component.items).toContain('a');
    component.clearAll();
    expect(component.items).not.toContain('a');
  });

});
