import Title from "./Title";

 

export default function Book(prop: Props) {
	return (
		<>
			<Title title="The book" />
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/600px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"
				alt="book"
			/>
			<p>
				A book is a medium for recording information in the form of writing or
				images, typically composed of many pages (made of papyrus, parchment,
			</p>
		</>
	);
}
