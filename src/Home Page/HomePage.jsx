import { useNavigate } from 'react-router-dom'
import logo from '/src/img/logo-v2.png';

export default function HomePage() {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/quiz')
  }

  return (
    <div className = "flex flex-col items-center justify-center h-screen">
      <img src={logo} alt="Logo" width={250}/>
      <h1 className="relative w-[max-content] font-mono before:absolute before:inset-0 before:bg-white before:animate-typewriter">
        Welcome to the Quiz Genie
      </h1>
      <button onClick = {handleButtonClick} className="mt-4 px-6 py-2 bg-newpurple-700 text-white font-semibold rounded-lg shadow-md hover:bg-newpurple-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Start
      </button>
    </div>
  )
}