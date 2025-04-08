const flip = () => {
    let x = (Math.floor(Math.random() * 2) == 0);
    if (x) {
        return "heads";
    } else {
        return "tails";
    }
}
console.log(flip());
