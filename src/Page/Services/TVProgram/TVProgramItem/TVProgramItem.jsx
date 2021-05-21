const TVProgramItem = ({item}) => {
    return (
        <div>
            <span style={{paddingRight: '10px'}}>{item.time}</span>
            <span style={{paddingRight: '10px'}}>{item.title}</span>
            <span className='text-secondary'>{item.channel}</span>
        </div>
    )
}

export default TVProgramItem;