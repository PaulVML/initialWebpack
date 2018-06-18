// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Heading } from 'components/atoms'
const Test = require("components/atoms/Test/test.pug");
console.log(Test);
const HomePage = () => {
  return (
    <div>
      <Heading>Hello Worlds apart</Heading>
      <div> This should be an interesting thing to write... but it isn't </div>
      <Test />
    </div>
  )
}

export default HomePage
