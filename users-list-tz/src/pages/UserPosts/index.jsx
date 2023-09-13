import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import axios from 'axios'
import styles from './styles.module.scss'
import { useParams } from 'react-router-dom'

export const UserPosts = () => {
  const params = useParams()
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`)
      .then((data) => {
        setUserPosts(data?.data)
      })
  }, [params.id])

  return (
    <div>
      <Header title={`${params.name} posts`} />
      <div className={styles.userPosts}>
        {userPosts.map((i) => (
          <div key={i.id} className={styles.post}>
            <h2 className={styles.post__title}>{i.title}</h2>
            <p className={styles.post__body}>{i.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
