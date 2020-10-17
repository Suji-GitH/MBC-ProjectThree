import React, { useState, useContext } from 'react'
import ThemeContext from "../../utils/ThemeContext";
import { BlockPicker } from 'react-color'
import Tippy from '@tippyjs/react'

function Theme () {
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState('#ccc');
  const [selectedBtnColor, setSelectedBtnColor] = useState('#ccc');
  const [selectedBtnTxtColor, setSelectedBtnTxtColor] = useState('black');

  const { theme } = useContext(ThemeContext);

  return (
    <>
<Tippy interactive={true} placement={'bottom'} content={
        <BlockPicker
          color={selectedBackgroundColor}
          onChangeComplete={color => setSelectedBackgroundColor(color.hex)}
        />
      }>
        <button>Select Background Color</button>

      </Tippy>

      <Tippy interactive={true} placement={'bottom'} content={
        <BlockPicker
          color={selectedBtnColor}
          onChangeComplete={color => setSelectedBtnColor(color.hex)}
        />
      }>
        <button>Select Button Color</button>

      </Tippy>

      <Tippy interactive={true} placement={'bottom'} content={
        <BlockPicker
          color={selectedBtnTxtColor}
          onChangeComplete={color => setSelectedBtnTxtColor(color.hex)}
        />
      }>
        <button>Select Button Text Color</button>

      </Tippy>

    </>
  )
}

export default Theme