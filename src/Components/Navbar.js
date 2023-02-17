import React from 'react'

function Navbar() {
  return (
    <div className='Nav-Cont'>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="nav">Navbar</a>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="home">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="features">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="pricing">Tech Stack</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="pricing">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="pricing">Contact</a>
      </li>
    </ul>
  </div>
</nav>
</div>
)};

export default Navbar