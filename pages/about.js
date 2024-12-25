export default function Example() {

  return (
    <div className="grid grid-rows-[75px_1fr]">
      <div className="bg-indigo-500 flex flex-row justify-between items-center px-10 w-full">
        <h2 className="text-white">Kari Lee</h2>
        <ul className="flex flex-row justify-evenly w-[20%]">
          <li>
            <a href='/'>Home</a>
          </li>
          <li className='font-bold'>
            <a href='/about'>About Me</a>
          </li>
          <li>
            <a href='/art'>Art</a>
          </li>
        </ul>
      </div>
    </div>
    
  )
}