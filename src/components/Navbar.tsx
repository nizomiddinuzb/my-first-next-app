import React from 'react'

function Navbar() {
  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href='/about'>About</a></li>
      <li>
        <details>
          <summary>
            Parent
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a href='/contact'>Contact</a></li>
            <li><a href='/price'>Price</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>

  )
}

export default Navbar