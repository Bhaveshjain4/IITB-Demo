export const validateEmail = (email) => {
    let Error = '';
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

export const handleFormValidation = (event) => {
  const{name,value}=event.target;
  
  let error = {name:event.target.name,errorText:''};
  console.log(email);
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if(name == 'email'){
  if(re.test(value)){
    error.errorText = '';
  }else{
    error.errorText = "Enter a valid email id";
  }
  
}else if(name == 'password'){
  if(value.length <=5){
    error.errorText = 'Enter a valid password';
  }else{
    error.errorText = ''
  }
}
console.log(error)
  return error;
};
