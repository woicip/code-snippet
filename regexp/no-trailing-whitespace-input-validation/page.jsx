export default function Page(){
  const pattern = /^[^\s]+(?:$|.*[^\s]+$)/
  return (
    <form>
      <input type="text" pattern={pattern} placeholder="Username" />
      <input type="password" pattern="^[^\s]+(?:$|.*[^\s]+$)" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  )
}