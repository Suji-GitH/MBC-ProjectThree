// import React from 'react';
// import {Link} from 'react-router-dom';
// import IconButton from '@material-ui/core/IconButton';
// import InfoRoundedIcon from '@material-ui/icons/InfoRounded';

// function Form() {

//   const infoStyle = {
//     position: "absolute",
//     top: "15px",
//     padding: "1em",
//     right: "20px"
//   };
  
//   return (
//     <>
//         <form noValidate onSubmit={this.onSubmit}>
//                 {/* Business Name */}
//                 <div style={authStyles.input}>
//                 <TextField 
//                 onChange={this.onChange}
//                 value={this.state.business_vendor}
//                 error={errors.business_vendor}
//                 id="business_vendor"
//                 type="text"
//                 label="Business Name" 
//                 variant="outlined"
//                 className={classnames("", {
//                   invalid: errors.business_vendor
//                 })}
//                  />
//                 <span style={{color: "crimson"}}>
//                   {errors.business_vendor}
//                 </span>
//                 </div>
//                 {/* Email */}
//                 <div style={authStyles.input}>
//                 <TextField 
//                 onChange={this.onChange}
//                 value={this.state.email}
//                 error={errors.email}
//                 id="email"
//                 type="email"
//                 label="Email" 
//                 variant="outlined"
//                 className={classnames("", {
//                   invalid: errors.email
//                 })}
//                  />
//                 <span style={{color: "crimson"}}>
//                 {errors.email}
//                 </span>
//                 </div>
//                 {/* Password */}
//                 <div style={authStyles.input}>
//                 <TextField 
//                 onChange={this.onChange}
//                 value={this.state.password}
//                 error={errors.password}
//                 id="password"
//                 type="password"
//                 label="Password" 
//                 variant="outlined"
//                 className={classnames("", {
//                   invalid: errors.password
//                 })}
//                  />
//                 <span style={{color: "crimson"}}>
//                   {errors.password}
//                 </span>
//                 </div>
//                 {/* Confirm Password */}
//                 <div style={authStyles.input}>
//                 <TextField 
//                 onChange={this.onChange}
//                 value={this.state.password2}
//                 error={errors.password2}
//                 id="password2"
//                 type="password"
//                 label="Confirm Password" 
//                 variant="outlined"
//                 className={classnames("", {
//                   invalid: errors.password2
//                 })}
//                  />
//                 <span style={{color: "crimson"}}>
//                   {errors.password2}
//                 </span>
//                 </div>
                
//                 <div style={authStyles.button}>
//                 <Button variant="contained" type="submit">Register</Button>
//                 <Link style={authStyles.link} tag={Link} to="/login">Already have an account? Login</Link>
//                 </div>
//         </form>
//     </>
//   );
// }

// export default Form;