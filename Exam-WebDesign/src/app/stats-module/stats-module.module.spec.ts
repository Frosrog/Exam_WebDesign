import { StatsModuleModule } from './stats-module.module';

describe('StatsModuleModule', () => {
  let statsModuleModule: StatsModuleModule;

  beforeEach(() => {
    statsModuleModule = new StatsModuleModule();
  });

  it('should create an instance', () => {
    expect(statsModuleModule).toBeTruthy();
  });
});
