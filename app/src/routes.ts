import { route, index } from '@react-router/dev/routes';

export default [
  route('/', './routes/layout.tsx', [
    index('./routes/home.tsx'),
    route('wheel', './routes/wheel.tsx'),
    route('dice', './routes/dice.tsx'),
    route('coin', './routes/coin.tsx'),
  ]),
];
