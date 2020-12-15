import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const sushis = () => {
    return props.sushiArray.map(sushi => <Sushi sushi={sushi} />)
  }
  return (
    <Fragment>
      <div className="belt">
        {
          sushis().slice(0, 4)
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer