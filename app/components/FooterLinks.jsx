
export default function({children,title}){
    return <div className=" max-w-[250px] flex flex-col ">
        <h2 className="text-[#FF541F] text-base md:text-lg lg:text-2xl font-semibold mb-4">{title}</h2>
        {children}
    </div>
}