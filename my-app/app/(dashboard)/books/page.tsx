import { cacheLife } from 'next/cache'

async function Page() {
  'use cache'
  cacheLife('hours')
  const responce = await fetch("http://localhost:3000/api/books");
  const books = await responce.json();

  return (
    <main>
      <code>{JSON.stringify(books, null, 2)}</code>
    </main>
  )
}

export default Page