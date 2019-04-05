import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head title="Home" />
    <div className="hero">
      <h1 className="title">Welcome to My Site</h1>
      <p className="description">
        Juan David Gómez - Frontend Developer
      </p>
    </div>

    <style jsx>{`
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
)

export default Home
