function Heart(props){
  return (
    <span className="bookmark-me" onClick={props.handleClick}>{ props.isLiked ? "❤️" : "💙" }</span>
  )
}

export default Heart;