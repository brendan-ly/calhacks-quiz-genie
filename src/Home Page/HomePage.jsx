import { useNavigate } from 'react-router-dom'


export default function HomePage() {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/quiz')
  }


  return (
    <div className = "flex flex-col items-center justify-center h-screen">
      <p>
        Welcome to the Quiz Genie
      </p>
      <button onClick = {handleButtonClick} className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Start
      </button>
    </div>
  )
}