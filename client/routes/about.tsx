import { Link } from 'react-router';

import type { Route } from './+types/about';

export const meta: Route.MetaFunction = () => [{ title: 'About | New React Router App' }];

export default function About(): React.ReactElement {
  return (
    <div className="p-4">
      <h1 className="text-4xl">About</h1>
      <p>
        <Link className="text-blue-600" to="/">
          Welcome
        </Link>
      </p>
    </div>
  );
}
