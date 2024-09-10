<template>
  <div class="register-container">
    <div class="background-animation"></div>
    <p class="register-title">New User Register</p>
    <form class="register-card" @submit.prevent="handleSignup">
      <div class="input-group">
        <label for="email">Email</label>
        <div class="input-wrapper">
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            v-model="email"
          />
          <span class="icon">
            <svg
              class="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 2H8c-1.1 0-2 .9-2 2v16l4-4h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <div class="input-wrapper">
          <input
            id="password"
            type="password"
            placeholder="*********"
            v-model="password"
          />
          <span class="icon">
            <svg
              class="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2c-1.1 0-2 .9-2 2v2h4V4c0-1.1-.9-2-2-2zm0 18a2 2 0 002-2h-4a2 2 0 002 2zm6-4H6V9h12v7z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="actions">
        <button type="submit" class="signup-btn">Register</button>
      </div>
      <div class="login-redirect">
        <p class="already-reg">Already Registered?</p>
        <button @click.prevent="handleLoginRedirect" class="login-btn">
          Log In
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleSignup = async () => {
  try {
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        emailRedirectTo: "https://orrery-web.vercel.app/",
      },
    });
    if (error) throw error;
    router.push("/sign-in");
    // router.push("https://nasa-orrery24-project.vercel.app/sign-in");
  } catch (error) {
    alert(error.error_description || error.message);
  }
};

const handleLoginRedirect = () => {
  router.push("/sign-in");
  // router.push("https://nasa-orrery24-project.vercel.app/sign-in");
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap");

.register-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #1d2a44, #0d1b2a);
  font-family: "Fira Code", monospace;
  overflow: hidden;
}

.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: url("https://www.transparenttextures.com/patterns/dark-matter.png"),
    linear-gradient(to bottom, #1d2a44, #0d1b2a);
  animation: cosmicGlow 20s infinite alternate;
}

@keyframes cosmicGlow {
  0% {
    filter: brightness(0.8);
  }
  100% {
    filter: brightness(1);
  }
}

.register-title {
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-align: center;
  z-index: 1;
}

.register-card {
  background-color: rgba(255, 255, 255, 0.15);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(15px);
  box-shadow: none;
  width: 100%;
  max-width: 400px;
  margin: 0 auto; /* Center the card */
  z-index: 1;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  color: #ffffff;
  font-weight: 500;
  display: block;
  margin-bottom: 0.5rem;
}

.input-wrapper {
  position: relative;
}

.input-wrapper input {
  width: 100%;
  padding: 0.75rem 1rem;
  padding-left: 2.5rem;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
  font-size: 1rem;
}

.input-wrapper input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.signup-btn {
  background-color: #5a2d81; /* Cosmic purple */
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: 30%;
  transition: background 0.3s, transform 0.3s;
}

.signup-btn:hover {
  background-color: #6a2d8b; /* Slightly lighter purple */
  transform: scale(1.05);
}

.forgot-password {
  color: #ffffff;
  font-size: 0.9rem;
}

.login-redirect {
  text-align: center;
}
.already-reg {
  color: #ffffff;
}

.login-btn {
  background-color: #1f4068; /* Deep space blue */
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

.login-btn:hover {
  background-color: #263a6c; /* Slightly lighter space blue */
  transform: scale(1.05);
}
</style>
