import {useState, useEffect} from 'react'

const colors = [
    "#FF69B4", "#00CED1", "#9370DB", "#FFA500", "#48D1CC",
    "#FF6347", "#7B68EE", "#20B2AA", "#9932CC", "#FFD700",
    "#1E90FF", "#FF4500", "#32CD32", "#8A2BE2", "#FF8C00",
    "#00FFFF", "#8B008B", "#FF1493", "#228B22", "#800080",
    "#FFDAB9", "#DC143C", "#0000FF", "#4682B4", "#40E0D0",
    "#FF7F50", "#FF4500", "#FF8C00", "#9932CC", "#8B0000",
    "#8B4513", "#32CD32", "#800000", "#D2691E", "#556B2F",
    "#4B0082", "#2F4F4F", "#A0522D", "#808000", "#8B008B",
    "#800080", "#006400", "#000080", "#008080", "#800000",
    "#A52A2A", "#CD5C5C", "#4B0082", "#483D8B", "#2F4F4F",
    "#000080", "#008080", "#556B2F", "#808000", "#2E8B57",
    "#800000", "#A52A2A", "#CD5C5C", "#4B0082", "#483D8B",
    "#2F4F4F", "#000080", "#008080", "#556B2F", "#808000",
    "#2E8B57", "#800000", "#A52A2A", "#CD5C5C", "#4B0082",
    "#483D8B", "#2F4F4F", "#000080", "#008080", "#556B2F",
    "#808000", "#2E8B57", "#800000", "#A52A2A", "#CD5C5C",
    "#4B0082", "#483D8B", "#2F4F4F", "#000080", "#008080",
    "#556B2F", "#808000", "#2E8B57", "#800000", "#A52A2A",
    "#CD5C5C", "#4B0082", "#483D8B", "#2F4F4F", "#000080",
    "#008080", "#556B2F", "#808000", "#2E8B57"
  ];
const QuoteHolder=()=>{
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [color, setColor] = useState('')
    const [clicked, setClicked] = useState(false)
    
    useEffect(()=>{
        const APIQuote=async()=>{
            fetch('https://api.quotable.io/random').then(response=>response.json())
            .then(data=>{
                setContent(data.content)
                setAuthor(data.author)
                setColor(()=>{
                    const random = Math.floor(Math.random()* colors.length)
                    return colors[random]
                })
                console.log('useEffect')
            }).catch (error=>console.error('fetching APIQuote failed'))
        }
        APIQuote()
    },[clicked])
    
    const click=()=>{
        setClicked((item)=>{
           return !item
        })
        console.log(clicked)
    }
    return(
        <div className= 'wrapper' style={{backgroundColor:color}}>
            <div className='cnt'>
                <div className='contentHolder'>
                    <div className='quote&author'>
                        <div className='quote' style={{color:color}}>
                        <i className="fa fa-quote-left"> </i>{`${content}`}
                        </div>
                        <div className='author' style={{color:color}}>
                            - {author}
                        </div>
                        <div className='button'>
                            <div className='btn-left'>
                                <button className='btn' style={{backgroundColor: color}}>
                                    <a href='twitter.com'>
                                        <i className="fa fa-twitter" style={{color: 'white'}}></i>
                                    </a>
                                </button>
                                <button className='btn' style={{backgroundColor: color}}>
                                    <a href='fb.com'>
                                        <i className="fa fa-facebook" style={{color: 'white'}}></i>
                                    </a>
                                </button>
                            </div>
                            <div className='btn-right'>
                                <button className='nextQuote' onClick={click} style={{backgroundColor: color}}>New quote</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QuoteHolder