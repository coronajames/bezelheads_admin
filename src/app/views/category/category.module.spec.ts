import { CategoryModule } from './category.module';

describe('InvoiceModule', () => {
  let categoryModule: CategoryModule;

  beforeEach(() => {
    categoryModule = new CategoryModule();
  });

  it('should create an instance', () => {
    expect(categoryModule).toBeTruthy();
  });
});
