export const checkMobile = () => {
    const width = window.innerWidth;
    if(width <= 600){
        return true;
    } else{
        return false;
    }
}