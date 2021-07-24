function Line(){
    return <line className="bg-orange"
    x1='0' y1='0'
    x2='200' y2='200'
    ></line>
}

export default function Home(){
    const Face = ({x,y,h,w}) => {
        const p = []
        p.push([x,y])
        p.push([x,y+h])
        p.push([x+w,y+h])
        p.push([x+w,y])

        return <polyline className="stroke-current"
            points = {p}
            fill='none'
        />
    }
    const Eyes = ({x,y}) => {
        return <rect className="fill-current"
            x={x} y={y}
            width={5} height={5}
            fill='none'
        />
    }
    const Nose = ({s, y_end, h, w, y_points}) => {
        const point = []
        const other_point = s[0] - w
        point.push(s)
        y_points.forEach(element => {
            point.push([s[0],element])
            point.push([other_point, element])
            point.push([other_point, element + h])
            point.push([s[0],element + h])
        });
        point.push([s[0],y_end])
        return <polyline className="stroke-current"
            points={point} //"15,0 15,5 12,5 12,9 15,9 15,21 12,21 12,25 15,25 15,30"
            fill='none'
        />
    }

    const Head = ({s}) => {
        return <polyline className="stroke-current"
            points="40.3,50 48,45 48,16 40.3,20"
            fill='none'
        />
    }

    const TopFill = ({s}) => {
        return <polyline className="fill-current"
            points="10,20 40,20 43,18 13,18"
        />
    }
    const TopStroke = ({s}) => {
        return <polyline className="stroke-current"
            points="13,18 18,16 48,16"
            fill='none'
        />
    }

    const Body = () => {
        return <path className="stroke-current"
            d='
            M 10 45 
            Q -5 50 10 55 
            Q 30 60 55 52 
            L 55 150 
            Q 30 158 10 153 
            Q 3.5 151 3 150 
            L 2 49'
            fill= "none"
        >
            
        </path>
    }

    const dx = 10, dy = 20

    return (
        <div className="flex justify-center items-center w-screen h-screen"> 
            <svg  viewBox='0 0 70 160' height='4em' width='2em'
                className="text-gray-100 text-opacity-50 text-6xl"
            >
                <Face x={0 + dx} y={0 + dy} h={30} w={30}/>
                <Eyes x={5 + dx} y={12 + dy}/>
                <Eyes x={20 + dx} y={12 + dy}/>
                <Nose s={[15 + dx,0 + dy]} y_end={30 + dy} h={4} w={3} y_points={[5 + dy ,21 + dy]}/>
                <Head/>
                <TopFill/>
                <TopStroke/>
                <Body/>
                <path className="stroke-current"
                    d='
                        M 10 45 
                        Q -5 50 10 55 
                        Q 30 60 55 52 
                        Q 70 45 48 41'
                        fill = 'none'
                ></path>
                <path className="stroke-current"
                    d='
                        M 55 149   
                        Q 62 146 61 145
                        L 61 48'
                        fill = 'none'
                ></path>
                
                
            </svg>
        </div>
    )
}