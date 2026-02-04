import { route, index } from '@react-router/dev/routes';

export default [
  route('/', './routes/layout.tsx', [
    index('./routes/home.tsx'),
    route('wheel', './routes/WheelRoute.tsx'),
    route('coin', './routes/CoinRoute.tsx'),
    route('dice', './routes/dice.tsx'),
  ]),
];
