import {useRouter} from 'next/router'
import path from 'path'
import Link from 'next/link'

export default function article({article}) {

  return (
    <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <Link href="/">Go Back</Link>
    </div>
  )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}


export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const articles = await res.json()
    
    const ids = articles.map(article => article.id)

    const paths = ids.map(id => ({params: {id: id.toString()}}))
    return {
        paths,
        fallBack: false
    }
}
