import Link from "next/link";

type Props = {
  topic: string,
  page: string | undefined,
  prevPage: string | null,
  nextPage: string | null,
}

export default function Footer({ topic, page, prevPage, nextPage}: Props) {
  if (!prevPage && !nextPage) return

  const pageNums: number[] = []

  if(prevPage && nextPage) {
    for(let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
      pageNums.push(i)
    }
  }

  const nextPageArea = nextPage
    ? (
        <Link
          className={!prevPage ? "mx-auto" : ""}
          href={`/results/${topic}/${nextPage}`}>  
          {!prevPage ? "more": ""} &gt;&gt;&gt;
        </Link>
    )
    : null

  const prevPageArea = nextPage
    ? (
        <>
          <Link
            className={!prevPage ? "mx-auto" : ""}
            href={`/results/${topic}/${nextPage}`}>  
            &lt;&lt;&lt; {!nextPage ? "back": ""} 
          </Link>
          {pageNums.map(num => (
            page && num === parseInt(page)
              ? num
              : (
                <Link href={`/results/${topic}/${num}`} key={num} className="underline">
                  {num}
                </Link> 
              )
          ))}
        </>
    )
    : null

  console.log('prevPage', prevPage);
  console.log('nextPage', nextPage);

  return (
    <footer className="flex flex-row justify-between items-center px-2 py-4 font-bold w-60 mx-auto">
      {prevPageArea}
      {nextPageArea}
    </footer>
  )
}
