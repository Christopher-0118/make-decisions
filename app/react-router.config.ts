export default {
  appDirectory: 'src',
  ssr: false,
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route('/', 'routes/layout.tsx', () => {
        route('', 'routes/home.tsx', { index: true });
        route('wheel', 'routes/wheel.tsx');
        route('dice', 'routes/dice.tsx');
        route('coin', 'routes/coin.tsx');
      });
    });
  },
};
