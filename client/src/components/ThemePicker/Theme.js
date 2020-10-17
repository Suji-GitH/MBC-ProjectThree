import React, { useState } from 'react'
import { BlockPicker } from 'react-color'
import Tippy from '@tippyjs/react'

function Theme () {
  const [selectedColor, setSelectedColor] = useState('#ccc')

  return (
    <>

      {/* style={{ backgroundColor: selectedColor }} */}

      <Tippy interactive={true} placement={'bottom'} content={
        <BlockPicker
          color={selectedColor}
          onChangeComplete={color => setSelectedColor(color.hex)}
        />
      }>
        <button>Select Background Color</button>

      </Tippy>

    </>
  )
}

export default Theme