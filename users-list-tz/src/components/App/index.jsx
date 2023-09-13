import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Users } from '../../pages/Users'
import { UserPosts } from '../../pages/UserPosts'
import { UserAlbums } from '../../pages/UserAlbums'
import { ROUTES } from '../../routes'
import '../../styles/reset.scss'
import styles from './styles.module.scss'

export const App = () => {
  return (
    <main className={styles.appWrapper}>
      <Routes>
        <Route path={ROUTES.USERS} element={<Users />}></Route>
        <Route path={ROUTES.USER_POSTS} element={<UserPosts />}></Route>
        <Route path={ROUTES.USER_ALBUMS} element={<UserAlbums />}></Route>
      </Routes>
    </main>
  )
}

export default App
