import { useState, useRef, Fragment } from 'react'
import AudioPlayer from '../components/audioPlayer'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const files = [
  {
    title: 'Picture 1',
    video: false,
    source:
      '/images/pic10.jpeg',
    audio: ''
  },
  {
    title: 'Picture 2',
    video: false,
    source:
      '/images/pic11.jpg',
    audio: ''
  },
  {
    title: 'Picture 3',
    video: false,
    source:
      '/images/pic12.jpeg',
    audio: ''
  },
  {
    title: 'Picture 4',
    video: false,
    source:
      '/images/pic13.jpeg',
    audio: ''
  },
  {
    title: 'Picture 5',
    video: false,
    source:
      '/images/pic14.jpg',
    audio: ''
  },
  {
    title: 'Picture 6',
    video: false,
    source:
      '/images/pic15.jpeg',
    audio: ''
  },
  {
    title: 'Picture 7',
    video: false,
    source:
      '/images/pic16.jpeg',
    audio: ''
  },
  {
    title: 'Picture 8',
    video: false,
    source:
      '/images/pic17.png',
    audio: ''
  },
  {
    title: 'Picture 9',
    video: false,
    source:
      '/images/pic18.jpeg',
    audio: ''
  },
  {
    title: 'Picture 10',
    video: false,
    source:
      '/images/pic19.jpeg',
    audio: ''
  },
  {
    title: 'Picture 11',
    video: false,
    source:
      '/images/pic20.png',
    audio: ''
  },
  {
    title: 'Picture 12',
    video: false,
    source:
      '/images/pic21.jpg',
    audio: ''
  },
  {
    title: 'Picture 13',
    video: false,
    source:
      '/images/pic22.png',
    audio: ''
  },
  {
    title: 'Picture 14',
    video: false,
    source:
      '/images/pic23.png',
    audio: ''
  },
  {
    title: 'Picture 15',
    video: false,
    source:
      '/images/pic24.jpeg',
    audio: ''
  },
  {
    title: 'Picture 16',
    video: false,
    source:
      '/images/pic25.png',
    audio: ''
  },
  {
    title: 'Picture 17',
    video: false,
    source:
      '/images/pic26.png',
    audio: ''
  },
  {
    title: 'Picture 18',
    video: false,
    source:
      '/images/pic27.jpeg',
    audio: ''
  },
  {
    title: 'Picture 19',
    video: false,
    source:
      '/images/pic28.jpeg',
    audio: ''
  },
  {
    title: 'Picture 20',
    video: false,
    source:
      '/images/pic29.png',
    audio: ''
  },
  {
    title: 'Picture 21',
    video: false,
    source:
      '/images/pic30.png',
    audio: ''
  },
  {
    title: 'Picture 22',
    video: false,
    source:
      '/images/pic31.png',
    audio: ''
  },
  {
    title: 'Picture 23',
    video: true,
    source:
      '/images/vid1.mp4',
    audio: ''
  },
  {
    title: 'Picture 24',
    video: true,
    source:
      '/images/vid2.mp4',
    audio: ''
  },
]

export default function Example() {
  // const [open, setOpen] = useState(false)
  // const [hoverImgSrc, setHoverImgSrc] = useState('')
  // const [imgAudio, setImgAudio] = useState('')
  const [currentImg, setCurrentImg] = useState({
    video: false,
    source: '',
    audio: '/audio/ali.mp3'
  })
  const [open, setOpen] = useState(false)
  const [playSubmitSound, setPlaySubmitSound] = useState(false)
  const cancelButtonRef = useRef(null)
  console.log(currentImg, open, playSubmitSound)

  return (
    <div className="grid grid-rows-[75px_1fr]">
      <div className="bg-indigo-500 flex flex-row justify-between items-center px-10 w-full">
        <h2 className="text-white">Kari Lee</h2>
        <ul className="flex flex-row justify-evenly w-[20%]">
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About Me</a>
          </li>
          <li className='font-bold'>
            <a href='/art'>Art</a>
          </li>
        </ul>
      </div>
      <div className="p-10 bg-gray-200">
        <ul role="list" className="grid grid-cols-3 gap-x-2 gap-y-4 sm:grid-cols-3 sm:gap-x-6 xl:gap-x-8">
          {files.map((file) => (
            <li key={file.source} className="relative">
              <div onClick={() => {
                setOpen(true)
                setCurrentImg(file)
                setPlaySubmitSound(true)
              }} className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                {
                  (file.video) ? (
                    <video className="pointer-events-none object-cover group-hover:opacity-75">
                      <source src={file.source} type="video/mp4" />
                    </video>
                   ) : (
                    <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                   )
                }
                <button type="button" className="absolute inset-0 focus:outline-none">
                  <span className="sr-only">View adlkfjakdfj for {file.title}</span>
                </button>
              </div>
              {/* <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{"Hello!"}</p> */}
            </li>
          ))}
        </ul>
        <AudioPlayer
            src={currentImg.audio}
            play={playSubmitSound}
            onFinish={() => setPlaySubmitSound(false)}
          />
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog static as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => null}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[700px] sm:p-6">
                        <div className="absolute right-0 top-0 hidden pr-2 pt-2 sm:block">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                            onClick={() => {
                              setOpen(false)
                              setPlaySubmitSound(false)
                            }}
                            ref={cancelButtonRef}
                          >
                            <span className="sr-only">Close</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                            <div>
                                <div className="mt-3 text-center sm:mt-5">
                                    {/* <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    New User
                                    </Dialog.Title> */}
                                    {
                                      (currentImg.video) ? (
                                        <video autoPlay className="pointer-events-none object-cover group-hover:opacity-75">
                                        <source src={(currentImg) ? currentImg.source : ''} type="video/mp4" />
                                      </video>
                                      ) : (
                                        <img src={(currentImg) ? currentImg.source : ''}></img>
                                      )
                                    }
                                    
                                </div>
                            </div>
                          {/* <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                            onClick={() => {
                              setOpen(false)
                              setPlaySubmitSound(false)
                            }}
                            ref={cancelButtonRef}
                          >
                            Cancel
                          </button> */}
                        </Dialog.Panel>
                        
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
      </Transition.Root>
    </div>
    
  )
}