export let Button = ({
    text = "CONTACT US",
    className = `bg-(--COLOR) p-4 rounded-xl text-white font-medium text-sm cursor-pointer hover:bg-(--HOVER)`,
    ...props })=>{
    return(<>
        <button className={className} {...props}>{text}</button>
    </>)}