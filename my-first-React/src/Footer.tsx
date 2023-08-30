 
export default function Footer() {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();
        const formattedTime = currentDate.toLocaleTimeString();

      
  return (
    <footer><p>David Rubin- {formattedDate} {formattedTime}</p></footer>
  )
}
