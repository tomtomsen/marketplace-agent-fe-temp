// import styles from './posts.module.css'
import { locators } from './comments.locators'

export default function Comments(props) {
  const { posts, users } = props;

  const postsSection = posts.map((post) => {
    const user = users.find((user) => post.userId === user.id)
    return (
      <div key={post.id}>
        <h2 data-testid={locators.title}>{post.title} - Comments</h2>
        <p data-testid={locators.userName}>By: <span>{user.name}</span></p>
        <p data-testid={locators.body}>{post.body}</p>
      </div>
    )
  })
  return (
    <div>
      {postsSection}
    </div>
  )
}