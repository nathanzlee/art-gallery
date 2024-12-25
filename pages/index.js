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

  return (
    <div className="grid grid-cols-[35%_65%] h-screen w-full">
      <div className="bg-indigo-500"></div>
      <div className='bg-white p-10 flex flex-col justify-center items-start'>
        <h1 className='text-indigo-500 font-bold text-[50px]'>I'm Kari Lee</h1>
        <a href="/art">
          <button
            type="button"
            className="bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Browse Art
          </button>
        </a>
      </div>
    </div>
    
  )
}
