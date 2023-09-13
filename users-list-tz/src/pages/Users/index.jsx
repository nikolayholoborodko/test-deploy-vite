import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import axios from 'axios'
import styles from './styles.module.scss'
import { generatePath, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes'

export const Users = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((data) => {
      setUsers(data?.data)
    })
  }, [])

  return (
    <div>
      <Header title="Users" />
      <div className={styles.userCards}>
        {users.map((i) => (
          <div key={i.id} className={styles.card}>
            <span>{i.name}</span>
            <div className={styles.buttons}>
              <button
                className={styles.buttons__posts}
                onClick={() =>
                  navigate(
                    generatePath(ROUTES.USER_POSTS, { id: i.id, name: i.name })
                  )
                }
              >
                Posts
              </button>
              <button
                className={styles.buttons__albums}
                onClick={() =>
                  navigate(
                    generatePath(ROUTES.USER_ALBUMS, { id: i.id, name: i.name })
                  )
                }
              >
                Albums
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
