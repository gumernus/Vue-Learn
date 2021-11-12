<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Gumernus</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              ><router-link :to="{ name: 'Home' }">Home</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link :to="{ name: 'About' }">About</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link :to="{ name: 'Profile' }">Profile</router-link></a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Projekty
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Portfolio</a></li>
              <li><a class="dropdown-item" href="#">Vue Router</a></li>
              <li><a class="dropdown-item" href="#">Tarx</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Bialu Bot</a></li>
              <li><a class="dropdown-item" href="#">Bialu Website</a></li>
              <li><a class="dropdown-item" href="#">Bialu Database</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 10000px;
}

h1 {
  padding: 10px;
  font-weight: bold;
}

.bg-light {
    background-color: #fff !important;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #5865f2;
}
</style>
