import { Book } from "./typs";
type Props = {
  product:Book
}

export default function Product({ product }:Props) {
	return(
     <h1>{product.title}</h1>
     
     )
}
