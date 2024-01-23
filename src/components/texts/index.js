export function Title({children, className}){
    return (
        <div className={`text-left text-4xl font-bold ${className}`}>
            {children}
        </div>
    )
}

export function SubTitle({children, className}){
    return (
        <div className={`text-center font-semibold ${className}`}>
            {children}
        </div>
    )
}

export function ArticleTitle({children, className}){
    return (
        <div className={`text-2xl mt-14 mb-8 font-bold border-b-2 pb-3 border-primaryColor w-full ${className}`}>
            {children}
        </div>
    )
}

export function Text({children, className}){
    return (
        <div className={`text-justify mt-5 ${className}`}>
            {children}
        </div>
    )
}