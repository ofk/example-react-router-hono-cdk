import type { Route } from './+types/_index';

import { Welcome } from '../welcome/welcome';

export const meta: Route.MetaFunction = () => [
  { title: 'New React Router App' },
  { content: 'Welcome to React Router!', name: 'description' },
];

export default function Home(): React.ReactElement {
  return <Welcome />;
}
