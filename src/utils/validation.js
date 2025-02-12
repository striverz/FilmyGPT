export const checkValidation=(email, password,name)=>{

    const validEmail=/^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email);
    const validPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const validName=(name.length>2 ? true : false);
    
    if(!validName) return "Name is not valid.";
    if(!validEmail) return "Email is not valid.";
    if(!validPassword) return "Password is not valid."

    return null;
}