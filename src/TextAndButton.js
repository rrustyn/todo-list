
/** A way to display text with a button
 * 
 * Props: 
 * - msg : words to display above button
 * - handleClick: what to do when button is clicked
 * - buttonText: text displayed on button
 * 
 * { Quote } -> TextAndButton
 */
function TextandButton({msg, handleClick, buttonText = "Click"}) {
  return (
    <div>
      {msg ? <p>msg</p> : null}
      <button onClick={handleClick}>
        {msg ? buttonText : "Click for an inspo quote" }
      </button>
    </div>
  )
}

export default TextandButton;