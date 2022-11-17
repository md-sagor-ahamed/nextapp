import Link from 'next/link'


export default function ArticleItem({article}) {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`} >
            <h3>{article.title} &rarr;</h3>
            <p>{article.body}</p>
    </Link>
  )
}
