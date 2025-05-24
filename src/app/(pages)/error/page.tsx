export default async function ErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>;
}) {
  const { message } = await searchParams;

  return (
    <>
      <h1 className="text-3xl font-bold">Sorry, something went wrong!</h1>
      {message && (<p>Error: {decodeURIComponent(message)}</p>)}
    </>
  )
}