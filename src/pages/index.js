import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: `purple`, fontSize: `72px` }}>
      <h1>Hello VTEX!!!</h1>
      <p>More info!</p>
      <div>
        <Link to="/about">About</Link>
      </div>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
    ) 
  }
