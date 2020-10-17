import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BlockPicker } from 'react-color'
import Tippy from '@tippyjs/react'

function Form() {
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState('#ccc');
  const [selectedBtnColor, setSelectedBtnColor] = useState('#ccc');
  const [selectedBtnTxtColor, setSelectedBtnTxtColor] = useState('black');

    const mobileAppStyles = {
        form: {
          backgroundColor: `${selectedBackgroundColor}`,
          height: "100vh"
        },
        formLayout: {
            textAlign: "center",
            margin: "5em 1em 0"
        },
        input: {
            margin: "1em",
            display: "grid"
        },
        buttonLayout: {
            margin: "4em 2em 0 1em",
            display: "grid"
        },
        button: {
          backgroundColor: `${selectedBtnColor}`,
          color: `${selectedBtnTxtColor}`
      }
      };
    
  return (
    <div style={mobileAppStyles.form} >
{/* style={{ backgroundColor: selectedColor }} */}
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

        <form style={mobileAppStyles.formLayout}>
        {/* noValidate onSubmit={this.onSubmit} */}
                {/* Last Name */}
                <div style={mobileAppStyles.input}>
                <TextField 
                // onChange={this.onChange}
                // value={this.state.c_firstName}
                // error={errors.c_firstName}
                id="c_firstName"
                type="text"
                label="First Name" 
                variant="outlined"
                // className={classnames("", {
                //   invalid: errors.c_firstName
                // })}
                 />
                {/* <span style={{color: "crimson"}}>
                  {errors.c_firstName}
                </span> */}
                </div>
                {/* Last Name */}
                <div style={mobileAppStyles.input}>
                <TextField 
                // onChange={this.onChange}
                // value={this.state.c_lastName}
                // error={errors.c_lastName}
                id="c_lastName"
                type="text"
                label="Last Name" 
                variant="outlined"
                // className={classnames("", {
                //   invalid: errors.c_lastName
                // })}
                 />
                {/* <span style={{color: "crimson"}}>
                  {errors.c_lastName}
                </span> */}
                </div>
                {/* Email */}
                <div style={mobileAppStyles.input}>
                <TextField 
                // onChange={this.onChange}
                // value={this.state.c_email}
                // error={errors.c_email}
                id="c_email"
                type="email"
                label="Email" 
                variant="outlined"
                // className={classnames("", {
                //   invalid: errors.c_email
                // })}
                 />
                {/* <span style={{color: "crimson"}}>
                {errors.c_email}
                </span> */}
                </div>
                {/* Mobile */}
                <div style={mobileAppStyles.input}>
                <TextField 
                // onChange={this.onChange}
                // value={this.state.c_mobileNumber}
                // error={errors.c_mobileNumber}
                id="c_mobileNumber"
                type="c_mobileNumber"
                label="Mobile Number" 
                variant="outlined"
                // className={classnames("", {
                //   invalid: errors.c_mobileNumber
                // })}
                 />
                {/* <span style={{color: "crimson"}}>
                  {errors.c_mobileNumber}
                </span> */}
                </div>
                
                <div style={mobileAppStyles.buttonLayout}>
                <Button style={mobileAppStyles.button} variant="contained" type="submit">Submit</Button>
                </div>
        </form>
    </div>
  );
}

export default Form;