import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome to the Weekly Tasks</h1>
      <ul className="list-disc list-inside">
        <li>
          <Link href="/week-3">
            <a className="text-blue-500 hover:underline">Week 3</a>
          </Link>
        </li>
        <li>
          <Link href="/week-4">
            <a className="text-blue-500 hover:underline">Week 4</a>
          </Link>
        </li>
        <li>
          <Link href="/week-5">
            <a className="text-blue-500 hover:underline">Week 5</a>
          </Link>
        </li>
        <li>
          <Link href="/week-6">
            <a className="text-blue-500 hover:underline">Week 6</a>
          </Link>
        </li>
        <li>
          <Link href="/week-7">
            <a className="text-blue-500 hover:underline">Week 7</a>
          </Link>
        </li>
        <li>
          <Link href="/week-8">
            <a className="text-blue-500 hover:underline">Week 8</a>
          </Link>
        </li>
        <li>
          <Link href="/week-9">
            <a className="text-blue-500 hover:underline">Week 9</a>
          </Link>
        </li>
        <li>
          <Link href="/week-10">
            <a className="text-blue-500 hover:underline">Week 10</a>
          </Link>
        </li>
      </ul>
    </div>
    </main>
  );
}