const Button = ({className, type, children, onClick, ...props})=>{

    const renderSubmit = ()=>(
        
        <button onClick={onClick} type={type} className={ `p-2 bg-cyan-700 font-semibold border-none rounded-2xl hover:scale-105 active:scale-95 active:shadow-inner transition-all drop-shadow-2xl ${className}`} {...props}>
        {children}
        </button>
       
    );
    
    const renderButton = ()=>(
 
        <button onClick={onClick} type={type} className={ `${className} p-2 bg-slate-200 text-slate-900 font-semibold border-none rounded-2xl hover:scale-105 active:scale-95 active:shadow-inner transition-all drop-shadow-2xl `} {...props}>
        {children}
        </button>
       

    );
              

   return type === "submit"? renderSubmit(): renderButton();
};
export default Button;