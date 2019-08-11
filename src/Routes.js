import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import Chapter from './pages/ChapterPage'
import Favorite from './pages/FavoritePage'
import Search from './pages/SearchPage'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"s
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/favorite' component={Favorite}/>
      <Route path='/pencarian' component={Search}/>
      <Route path='/:chapter' component={Chapter}/>
    </Switch>
  </main>
)

export default Main
