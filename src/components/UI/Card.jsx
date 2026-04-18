const Card = ({className, id, children, ...props})=>{
    return(
        <div className={className} id={id} {...props}>
            <div className="flex flex-col gap-6 rounded-xl border w-full bg-gradient-to-br from-white/40 via-white/30 to-cyan-50/40 backdrop-blur-lg border-white/30 shadow-xl">
            {children}
            </div>

        </div>
    )
}
export default Card;