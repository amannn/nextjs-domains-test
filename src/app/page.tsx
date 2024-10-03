import {headers} from 'next/headers';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>Hello world!</h1>
      <pre>
        VERCEL_PROJECT_PRODUCTION_URL:{' '}
        {process.env.VERCEL_PROJECT_PRODUCTION_URL}
      </pre>
      <pre>{JSON.stringify(Array.from(headers().entries()), null, 2)}</pre>
    </div>
  );
}
