const Section = ({
  className,
  id,
  children,
})=>{
    return(
        <div id={id} className={`my-5 max-w-full md:px-5 ${className}`}>
            {children}
            </div>

    )
}
export default Section;