import { ActionFunctionArgs, defer, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useNetworkState } from '@uidotdev/usehooks'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

async function loader({request}: LoaderFunctionArgs) {
  return defer({ message: "Hello, World!" });
}

async function action({request}: ActionFunctionArgs) {
  return null;
}

export default function Index() {
  const network = useNetworkState()
  console.log('network', network)
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}






