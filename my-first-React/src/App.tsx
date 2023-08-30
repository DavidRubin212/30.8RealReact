import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Book } from "./typs";
import Container from "./Container";
const book1: Book = {
  text: "This is a sample book text",
  title: "Book 1",
  imgSrc: "https://images-na.ssl-images-amazon.com/images/I/51estVXM1UL._SX329_BO1,204,203,200_.jpg" 
};

const book2: Book = {
  text: "Text for the second book",
  title: "Book 2",
  imgSrc: "https://images-na.ssl-images-amazon.com/images/I/51wTLf4JVZL._SX384_BO1,204,203,200_.jpg"
};

const book3: Book = {
  text: "Some text about book 3",
  title: "Book 3",
  imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41SMlI+6PrL._SX328_BO1,204,203,200_.jpg"
};

const book4: Book = {
  text: "Book 4 information", 
  title: "Book 4",
  imgSrc: "https://images-na.ssl-images-amazon.com/images/I/61jPQlxU-jL._SX424_BO1,204,203,200_.jpg"
};
const books = [book1, book2, book3, book4]

function App() {
	return (
		<div>
			<Header />
      <Container books = {books}/>
 			<Footer />
		</div>
	);
}

export default App;
