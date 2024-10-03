export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>Hello {process.env.VERCEL_PROJECT_PRODUCTION_URL === 'nextjs-domains-test-a.vercel.app' ? 'A' : 'B'}!</h1>
      <pre>
        VERCEL_PROJECT_PRODUCTION_URL:{' '}
        {process.env.VERCEL_PROJECT_PRODUCTION_URL}
      </pre>
    </div>
  );
}
