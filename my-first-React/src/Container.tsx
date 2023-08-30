import { Book } from "./typs";
import Product from "./Product";
type Props = {
    books:Book[]
}
const Container = (props: Props) => {
    const {books} = props
  return (
    <div>
        {books.map((book) => 
       (<Product product={book}/>) )}
    </div>
  )
}
export default Container