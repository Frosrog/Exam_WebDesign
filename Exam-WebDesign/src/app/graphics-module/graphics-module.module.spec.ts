import { GraphicsModuleModule } from './graphics-module.module';

describe('GraphicsModuleModule', () => {
  let graphicsModuleModule: GraphicsModuleModule;

  beforeEach(() => {
    graphicsModuleModule = new GraphicsModuleModule();
  });

  it('should create an instance', () => {
    expect(graphicsModuleModule).toBeTruthy();
  });
});
