
export const ShowIncrement = ({increment}) => {

    console.log ('me volvi a generar :(')
  return (
    <button 
    className="btn btn-primary mt-2"
    onClick={()=>increment()}
    > 
        Incrementar
        </button>
  )
}
