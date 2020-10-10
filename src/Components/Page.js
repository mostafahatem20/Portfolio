import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { useHistory } from 'react-router'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
export default function Page() {
  const history = useHistory()
  const [burger, setBurger] = useState('burger')
  const [page, setPage] = useState('hidden')
  const [active, setActive] = useState('about')
  const handleBurger = () => {
    if (burger === 'burger') {
      setBurger('burger hover')
    }
    if (burger === 'burger st-1 st-2') {
      setBurger('burger st-1 st-2 hover')
    }
  }
  const handleBurgerout = () => {
    if (burger === 'burger hover') {
      setBurger('burger')
    }
    if (burger === 'burger st-1 st-2 hover') {
      setBurger('burger st-1 st-2')
    }
  }
  const handleBurgerclick = () => {
    if (burger === 'burger hover') {
      setBurger('burger st-1 st-2 hover')
    } else if (burger === 'burger') {
      setBurger('burger st-1 st-2')
    } else if (burger === 'burger st-1 st-2') {
      setBurger('burger')
    } else if (burger === 'burger st-1 st-2 hover') {
      setBurger('burger hover')
    }
    if (page === 'hidden') {
      setPage('')
    } else {
      setPage('hidden')
    }
  }
  const handleActive = (x, y) => {
    if (x === 'about') {
      setActive('about')
      setNext('Portfolio')
      setBefore('')
      history.push('/')
    } else if (x === 'port') {
      setActive('port')
      history.push('/Portfolio')
      setNext('Contact')
      setBefore('About')
      history.push('/Portfolio')
    } else if (x === 'con') {
      setActive('con')
      setNext('')
      setBefore('Portfolio')
      history.push('/Contact')
    }
    if (y) handleBurgerclick()
  }
  const [next, setNext] = useState(
    window.location.pathname === '/'
      ? 'Portfolio'
      : window.location.pathname === '/Portfolio'
      ? 'Contact'
      : ''
  )
  const [before, setBefore] = useState(
    window.location.pathname === '/Contact'
      ? 'Portfolio'
      : window.location.pathname === '/Portfolio'
      ? 'About'
      : ''
  )

  const handleNext = () => {
    if (next === 'Portfolio') {
      history.push('/Portfolio')
      setNext('Contact')
      setBefore('About')
    } else {
      history.push('/Contact')
      setNext('')
      setBefore('Portfolio')
    }
  }
  const handleBefore = () => {
    if (before === 'About') {
      history.push('/')
      setNext('Portfolio')
      setBefore('')
    } else {
      history.push('/Portfolio')
      setNext('Contact')
      setBefore('About')
    }
  }
  return (
    <div className="mainPage">
      <header
        id="page-header"
        className={page}
        data-title="Full-Stack Web Developer Portfolio, UI/UX Javascript Specialist"
      >
        <nav style={{ height: '100vh' }}>
          <a
            title="about"
            className={active === 'about' ? 'active' : ''}
            onClick={() => handleActive('about', true)}
          >
            <span>About</span>
          </a>
          <a
            title="web portfolio"
            className={active === 'port' ? 'active' : ''}
            onClick={() => handleActive('port', true)}
          >
            <span>Portfolio</span>
          </a>

          <a
            title="contact"
            className={active === 'con' ? 'active' : ''}
            onClick={() => handleActive('con', true)}
          >
            <span>Contact</span>
          </a>
        </nav>
        <div
          className={burger}
          onMouseOver={handleBurger}
          onMouseOut={handleBurgerout}
          onClick={handleBurgerclick}
        >
          <i></i>
          <i></i>
          <i></i>
        </div>
      </header>
      <div class="page-control">
        {before && page ? (
          <a class="prev">
            <span style={{ textTransform: 'capitalize' }}>{before}</span>
            <em onClick={handleBefore} style={{ cursor: 'pointer' }}></em>
          </a>
        ) : (
          ''
        )}
        {console.log(window.innerWidth)}
        {next && page ? (
          <a title="Web Development Portfolio" class="next">
            <span style={{ textTransform: 'capitalize' }}>{next}</span>
            <em onClick={handleNext} style={{ cursor: 'pointer' }}></em>
          </a>
        ) : (
          ''
        )}
      </div>
      <Route
        exact
        path="/"
        render={() => <About handleActive={handleActive} />}
      />
      <Route exact path="/Portfolio" render={() => <Portfolio />} />
      <Route exact path="/Contact" render={() => <Contact />} />
    </div>
  )
}
