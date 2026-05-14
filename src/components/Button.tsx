type Props = {
  disabled: boolean,
  handleClick: () => void,
  children: React.ReactNode
}

function Button({ disabled, handleClick, children }: Props) {
  return (
    <button disabled={disabled}
          className="    
            btn btn-primary
            disabled:opacity-50
            disabled:cursor-not-allowed
            disabled:bg-gray-400"
          onClick={handleClick}>
    {children}
  </button>
  )
}

export default Button