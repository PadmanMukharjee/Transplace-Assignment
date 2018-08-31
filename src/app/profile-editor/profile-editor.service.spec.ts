import { TestBed, inject } from '@angular/core/testing';

import { ProfileEditorService } from './profile-editor.service';

describe('ProfileEditorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileEditorService]
    });
  });

  it('should be created', inject([ProfileEditorService], (service: ProfileEditorService) => {
    expect(service).toBeTruthy();
  }));

  it('sum', inject([ProfileEditorService], (service: ProfileEditorService) => {
      expect(service.sum(1,'1')).toBe('11');
  }))
});
