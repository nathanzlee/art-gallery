import { useState, useRef, Fragment } from 'react'
import AudioPlayer from '../components/audioPlayer'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const files = [
  {
    title: 'Picture 1',
    source:
      '/images/pic1.jpeg',
    audio: '/audio/audio1.mp3'
  },
  {
    title: 'Picture 2',
    source:
      '/images/pic2.jpeg',
    audio: '/audio/audio2.mp3'
  },
  {
    title: 'Picture 3',
    source:
      '/images/pic3.jpeg',
    audio: '/audio/audio36.mp3'
  },
  {
    title: 'Picture 4',
    source:
      '/images/pic4.jpeg',
    audio: '/audio/audio4.mp3'
  },
  {
    title: 'Picture 5',
    source:
      '/images/pic5.jpeg',
    audio: '/audio/audio5.mp3'
  },
  {
    title: 'Picture 6',
    source:
      '/images/pic6.jpeg',
    audio: '/audio/audio36.mp3'
  },
  {
    title: 'Picture 7',
    source:
      '/images/pic7.jpeg',
    audio: '/audio/audio7.mp3'
  },
  {
    title: 'Picture 8',
    source:
      '/images/pic8.jpeg',
    audio: '/audio/audio8.mp3'
  },
  {
    title: 'Picture 9',
    source:
      '/images/pic9.jpeg',
    audio: '/audio/audio9.mp3'
  },
]

export default function Example() {
  // const [open, setOpen] = useState(false)
  // const [hoverImgSrc, setHoverImgSrc] = useState('')
  // const [imgAudio, setImgAudio] = useState('')
  const [currentImg, setCurrentImg] = useState({
    source: '',
    audio: '/audio/ali.mp3'
  })
  const [open, setOpen] = useState(false)
  const [playSubmitSound, setPlaySubmitSound] = useState(false)
  const cancelButtonRef = useRef(null)
  console.log(currentImg, open, playSubmitSound)

  return (
    <div>
      <div className="p-10">
        <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {files.map((file) => (
            <li key={file.source} className="relative">
              <div onClick={() => {
                setOpen(true)
                setCurrentImg(file)
                setPlaySubmitSound(true)
              }} className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                <button type="button" className="absolute inset-0 focus:outline-none">
                  <span className="sr-only">View adlkfjakdfj for {file.title}</span>
                </button>
              </div>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{"Hello!"}</p>
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
                                    <img src={(currentImg) ? currentImg.source : ''}></img>
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