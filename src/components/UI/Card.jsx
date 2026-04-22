const Card = ({className, id, children, ...props})=>{
    return(
        <div className={className} id={id} {...props}>
            <div className="flex flex-col gap-2 rounded-xl border w-full h-fit bg-gradient-to-br from-white/40 via-white/30 to-cyan-50/40 shadow-xl hover:scale-105 transition-all">
            {children}
            </div>

        </div>
    )
}
export default Card;