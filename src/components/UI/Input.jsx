const Input = ({className, type, name,id,  ...props})=>{
    return(
<>
<input type={type} name={name} id={id} className={`text-base py-2 rounded-2xl border-border ring-yellow-500 focus:outline-none focus:ring-4 focus:border-transparent drop-shadow-2xl ${className}`} required {...props}/>
</>
    )
}
export default Input;