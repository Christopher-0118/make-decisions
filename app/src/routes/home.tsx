import { Link } from 'react-router';

export default function HomeRoute() {
  return (
    <section>
      <h1>Make a Random Decision</h1>
      <p>Pick a tool to help you decide:</p>
      <ul>
        <li>
          <Link to="/wheel">Spin the wheel</Link>
        </li>
        <li>
          <Link to="/dice">Roll the dice</Link>
        </li>
        <li>
          <Link to="/coin">Flip a coin</Link>
        </li>
      </ul>
    </section>
  );
}
