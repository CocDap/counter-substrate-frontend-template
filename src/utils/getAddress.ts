const getAddress = (address = '', startLen = 6, endLen = 6) => {
    return `${address.substring(0, startLen)}...${address.substring(
      address.length - endLen,
      address.length,
    )}`;
  };
  
  export default getAddress;
  