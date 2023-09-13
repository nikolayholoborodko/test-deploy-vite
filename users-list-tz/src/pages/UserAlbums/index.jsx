import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import axios from 'axios'
import styles from './styles.module.scss'
import { useParams } from 'react-router-dom'

export const UserAlbums = () => {
  const params = useParams()
  const [userAlbums, setUserAlbums] = useState([])

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}/albums`)
      .then((data) => {
        setUserAlbums(data?.data)
      })
  }, [params.id])

  return (
    <div>
      <Header title={`${params.name} albums`} />
      <div className={styles.userAlbums}>
        {userAlbums.map((i) => (
          <div key={i.id} className={styles.album}>
            <h2 className={styles.album__title}>{i.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
