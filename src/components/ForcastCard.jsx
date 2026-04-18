const ForcastCard = ({children, className, ...props})=>{
    return(
        <div className={`flex flex-col items-center p-3 bg-gradient-to-br from-white/50 to-cyan-100/30 backdrop-blur-sm rounded-lg border border-white/30 hover:shadow-lg transition-all hover:scale-105 ${className}`} {...props}>
            {children}
        </div>

    )
}
export default ForcastCard;