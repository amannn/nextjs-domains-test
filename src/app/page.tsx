import { headers } from "next/headers";

export default function Home() {
  return (
    <pre className="flex p-4">
      {JSON.stringify(Array.from(headers().entries()), null, 2)}
    </pre>
  );
}
