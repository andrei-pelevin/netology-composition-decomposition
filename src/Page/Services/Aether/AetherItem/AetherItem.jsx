const AetherItem = ({ item }) => {
    return (
        <div>
            <span className="material-icons">play_arrow</span>
            <span><b>{item.title}</b></span>
             - <span>{item.channel}</span>
        </div>
    )
}

export default AetherItem;