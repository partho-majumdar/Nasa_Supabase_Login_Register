<template>
  <div id="body">
    <div class="header">
      <a href="#default"
        ><i class="fa fa-search"></i>&nbsp;🌟 Greetings, Cosmic Explorer! 🌟</a
      >
      <div class="header-center" style="letter-spacing: 0.5em">
        SOLAR_SPHERE🚀
      </div>
      <div class="header-right">
        <a class="active" href="/">Home</a>
        <a href="/sign-in">Login</a>
        <a href="/sign-up">Register</a>
      </div>
    </div>
    <div class="welcome-card">
      <div class="card-content">
        <h2>🌌 Welcome to the Cosmic Orrery Experience! 🌌</h2>
        <p>Get ready for an out-of-this-world adventure! Explore:</p>
        <ul>
          <li>
            <strong>🌍 Interactive Planets:</strong> Dive into detailed
            planetary views!
          </li>
          <li>
            <strong>🪐 Near-Earth Asteroids:</strong> Track the paths of cosmic
            wanderers!
          </li>
          <li>
            <strong>☄️ Comets & Hazards:</strong> Discover the spectacular and
            the dangerous!
          </li>
        </ul>
        <p>
          <strong>🚀 Log In or Sign Up</strong> now to access the full universe
          of features and embark on your space journey! ✨🌠
        </p>
      </div>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: roboto;
  background-image: url("https://wallpapercave.com/wp/wp3493599.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  height: 100vh;
  width: 100vw;
}

.header {
  overflow: hidden;
  background-color: transparent;
  padding: 20px 10px;
  position: relative;
}

.header a {
  float: left;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 12px;
  line-height: 25px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
}

.header-center {
  position: absolute;
  margin: 0 auto 0 auto;
  color: white;
  font-size: 25px;
  letter-spacing: 12px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Share Tech";
}

.header-right {
  float: right;
  color: white;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }

  .header-right {
    float: none;
  }
}

.content h1 {
  letter-spacing: 10px;
  font-size: 48px;
}

.content {
  position: absolute;
  top: 25%;
  width: 100%;
}

html,
body {
  height: 100%;
  width: 100%;
}

.content a {
  background-color: aqua;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 40px;
  color: black;
  text-decoration: none;
}

.welcome-card {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 12px;
  max-width: 80%;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.welcome-card h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

.welcome-card p {
  font-size: 18px;
  line-height: 1.6;
}

.welcome-card ul {
  list-style-type: none;
  padding: 0;
  margin: 15px 0;
}

.welcome-card li {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
