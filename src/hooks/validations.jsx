export const validatePassword = (password) => {
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^\w\s]/.test(password);
    const minLength = 8; // Adjust minimum password length as needed
  
    return (
      hasLowercase &&
      hasUppercase &&
      hasNumber &&
      hasSymbol &&
      password.length >= minLength
    );
  };


export const getFamilyNames = (parts) => {
    if (parts.length === 1) {
        return parts[0];
    }
    

    if (containsNumber(parts[parts.length-1])) {
        parts.pop()
    }
    var familyNames = parts.map(capitalizeFirstLetter)
    familyNames = familyNames.slice(1).join(' ');

    return familyNames;
}



export const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const containsNumber = (str) => {
    return str.search(/\d/) !== -1;
}