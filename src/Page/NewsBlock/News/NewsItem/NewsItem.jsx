const NewsItem = ({note}) => {
    return (
        <li className="list-group-item border-0 p-0 mt-1" >
            
           <img style={{width:'20px', marginRight:'10px'}}  
           src={note.icon}
           alt=''/>
           <a className='text-dark' href={note.url}>{note.titel}</a>
           </li>
    )
}

export default NewsItem;