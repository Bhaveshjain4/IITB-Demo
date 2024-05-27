export const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(email);
  };
  
export const validatePassword=(password)=>{
    return password.length>=6;
  }

export const comparePassword=(password,confirmPassword)=>{
    return password.localeCompare(confirmPassword)===0
}

export const validateusername=(username)=>{
    const re=/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
    return re.test(username)
}