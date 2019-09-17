import React from 'react'
import Lemon from './Lemon/Lemon'
import Blueberry from './Blueberry/Blueberry'
import Pear from './Pear/Pear'
import Pom from './Pom'
import Pickle from './Pickle'
import Tomato from './Tomato'
import Olive from './Olive'
import SmileyFace from './SmileyFace'


const bag = [
  {
    title: "Lemon",
    desc: "I am sour",
    comp: <Lemon />
  },
  {
    title: "Blueberry",
    desc: "I am blue",
    comp: <Blueberry />
  },
  {
    title: "Pear",
    desc: "Perfect Pear",
    comp: <Pear />
  },
  {
    title: "Pomegranate",
    desc: "Pom Pom",
    comp: <Pom />
  },
  {
    title: "Pickle",
    desc: "I'm kind of a big dill",
    comp: <Pickle />
  },

  {
    title: 'Tomato',
    desc: "Love you from my head tomatoes",
    comp: <Tomato />
  },

  {
    title: 'Olive',
    desc: "Olive you so much it hurts",
    comp: <Olive />
  },
  {
    title: 'SmileyFace',
    desc: " I am a total weirdo",
    comp: <SmileyFace />
  },
  {
    title: 'Weird Lemon Thing',
    desc: 'Making people bitter, one bite at a time',
    // comp: <LemonThing />
  }
]



export default bag