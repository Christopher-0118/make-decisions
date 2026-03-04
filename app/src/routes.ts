import { route } from '@react-router/dev/routes';

export default [
  route('/', './routes/layout.tsx', [
    route('', './routes/RedirectToWheel.tsx'),
    route('wheel', './routes/WheelRoute.tsx'),
    route('coin', './routes/CoinRoute.tsx'),
    route('dice', './routes/DiceRoute.tsx'),
  ]),
];
