import ArticleItem from './ArticleItem'

export default function ArticleList({articles}) {
  return (
    <div className='articleStyles'>
        {articles.map(article => (
            <ArticleItem key={article.id} article={article} />
        //   <h2 key={article.id}>{article.title}</h2>
        )
      )}
    </div>
  )
}
