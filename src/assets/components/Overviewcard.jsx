export function Overviewcard(props) {
    const {title, figure} = props
    return (
        <>
            <div className="">
                <div className="bg-amber-200 p-2 w-3xs rounded-2xl ">
                    <p className="font-bold">{title}</p>
                    <div className="text-3xl font-bold">${figure}</div>
                    <div className="flex text-center justify-center">
                        <p className="mr-1 text-green-600">5.35%</p>
                        <p className="text-gray-600">period of change</p>
                    </div>
                </div>

            </div>
        </>
    )
}