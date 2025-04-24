body {
  background-color: #0e0e0e;
  color: white;
  font-family: 'Cairo', sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

.container {
  padding: 2rem;
}

.hero .brand {
  font-size: 2.5rem;
  color: #32cd32;
  font-weight: 800;
  margin: 1rem 0 0.5rem;
}

.description {
  max-width: 600px;
  margin: 0 auto 2rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ccc;
}

.icon {
  margin-top: 2rem;
  animation: fadeIn 2s ease-out;
}

.fire-glow i {
  color: #32cd32;
  text-shadow: 0 0 15px #32cd32, 0 0 30px #228b22;
  animation: pulse 2s infinite;
}

.typewriter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  font-size: 2rem;
  color: #32cd32;
  margin-top: 2rem;
  text-shadow: 0 0 10px #32cd32, 0 0 20px #32cd32;
}

.typewriter i {
  animation: pulse 2s infinite;
}

.before-channels {
  margin-top: 2.5rem;
  font-size: 1.2rem;
  color: #ccc;
}

.channels {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.channel {
  background-color: #1c1c1c;
  border: 1px solid #32cd32;
  padding: 1.8rem;
  border-radius: 1.5rem;
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.6s ease-in-out, transform 0.3s;
}

.channel:hover {
  transform: scale(1.05);
  opacity: 1;
}

.glow {
  box-shadow: 0 0 15px #32cd32, 0 0 25px #32cd32;
}

.channel a {
  display: inline-block;
  margin-top: 1rem;
  color: #32cd32;
  font-weight: bold;
  text-decoration: none;
}

footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #32cd32;
}

.social-icons {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-icons i {
  font-size: 2rem;
  color: #32cd32;
  transition: transform 0.3s ease-in-out;
}

.social-icons i:hover {
  transform: scale(1.3);
}

/* Animations */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% {
    text-shadow: 0 0 15px #32cd32, 0 0 30px #228b22;
  }
  50% {
    text-shadow: 0 0 30px #32cd32, 0 0 60px #228b22;
  }
}

@media (max-width: 768px) {
  .typewriter {
    font-size: 1.5rem;
    flex-direction: column;
  }

  .channel {
    padding: 1.2rem;
  }
  }
