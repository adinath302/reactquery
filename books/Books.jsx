import React, { use, useEffect, useState } from 'react'
import Bookcard from './Bookcard';
import Categories from './Categories';
import { CiSearch } from "react-icons/ci";


const booklist = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self-Help",
        genre: "Productivity",
        reasonToRead: "Build life-changing habits with practical steps.",
        image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
        tags: ["habits", "productivity", "behavior change"]
    },
    {
        id: 2,
        title: "Deep Work",
        author: "Cal Newport",
        category: "Self-Help",
        genre: "Focus / Productivity",
        reasonToRead: "Learn to focus without distraction in a noisy world.",
        image: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
        tags: ["focus", "concentration", "workflow"]
    },
    {
        id: 3,
        title: "Can't Hurt Me",
        author: "David Goggins",
        category: "Self-Help",
        genre: "Motivational Memoir",
        reasonToRead: "Master your mind and defy the odds.",
        image: "https://covers.openlibrary.org/b/isbn/9781544512273-L.jpg",
        tags: ["resilience", "mental toughness", "motivation"]
    },
    {
        id: 4,
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        category: "Self-Help",
        genre: "Modern Philosophy / Humor",
        reasonToRead: "Cut through the noise and focus on what matters.",
        image: "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg",
        tags: ["mindset", "real talk", "minimalism"]
    },
    {
        id: 5,
        title: "Mindset",
        author: "Carol S. Dweck",
        category: "Self-Help",
        genre: "Psychology / Personal Growth",
        reasonToRead: "Learn about fixed vs growth mindsets.",
        image: "https://covers.openlibrary.org/b/isbn/9780345472328-L.jpg",
        tags: ["growth", "psychology", "education"]
    },
    {
        id: 6,
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        category: "Finance",
        genre: "Personal Finance",
        reasonToRead: "Shift your mindset and learn how money works.",
        image: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg",
        tags: ["finance", "assets", "money"]
    },
    {
        id: 7,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        category: "Finance",
        genre: "Behavioral Economics",
        reasonToRead: "Explore how behavior affects financial decisions.",
        image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
        tags: ["wealth", "mindset", "money habits"]
    },
    {
        id: 8,
        title: "Your Money or Your Life",
        author: "Vicki Robin & Joe Dominguez",
        category: "Finance",
        genre: "Personal Finance",
        reasonToRead: "Transform your relationship with money and life.",
        image: "https://covers.openlibrary.org/b/isbn/9780143115762-L.jpg",
        tags: ["frugality", "financial independence", "values"]
    },
    {
        id: 9,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        category: "Psychology",
        genre: "Cognitive Psychology",
        reasonToRead: "Understand how our thinking systems work.",
        image: "https://covers.openlibrary.org/b/isbn/9780374275631-L.jpg",
        tags: ["bias", "decision making", "cognition"]
    },
    {
        id: 10,
        title: "Quiet",
        author: "Susan Cain",
        category: "Psychology",
        genre: "Personality Psychology",
        reasonToRead: "The power of introverts in a world that can't stop talking.",
        image: "https://covers.openlibrary.org/b/isbn/9780307352156-L.jpg",
        tags: ["introversion", "personality", "communication"]
    },
    {
        id: 11,
        title: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        category: "Philosophy",
        genre: "Existentialism / Memoir",
        reasonToRead: "Discover meaning even in the darkest times.",
        image: "https://covers.openlibrary.org/b/isbn/9780807014295-L.jpg",
        tags: ["purpose", "philosophy", "life"]
    },
    {
        id: 12,
        title: "Meditations",
        author: "Marcus Aurelius",
        category: "Philosophy",
        genre: "Stoic Philosophy",
        reasonToRead: "Timeless wisdom from a Roman emperor.",
        image: "https://covers.openlibrary.org/b/isbn/9780140449334-L.jpg",
        tags: ["stoicism", "wisdom", "reflection"]
    },
    {
        id: 13,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        genre: "Philosophical Fiction",
        reasonToRead: "A mystical journey of self-discovery.",
        image: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg",
        tags: ["dreams", "journey", "spirituality"]
    },
    {
        id: 14,
        title: "1984",
        author: "George Orwell",
        category: "Fiction",
        genre: "Dystopian",
        reasonToRead: "A powerful warning about authoritarianism.",
        image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
        tags: ["freedom", "surveillance", "totalitarianism"]
    },
    {
        id: 15,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Fiction",
        genre: "Classic Novel",
        reasonToRead: "A critique of the American Dream.",
        image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
        tags: ["classic", "dream", "20th century"]
    },
    {
        id: 16,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        category: "Nonfiction",
        genre: "History / Anthropology",
        reasonToRead: "A brief history of humankind.",
        image: "https://covers.openlibrary.org/b/isbn/9780062316110-L.jpg",
        tags: ["history", "evolution", "society"]
    },
    {
        id: 17,
        title: "Educated",
        author: "Tara Westover",
        category: "Nonfiction",
        genre: "Memoir",
        reasonToRead: "A memoir of education and self-invention.",
        image: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg",
        tags: ["memoir", "education", "identity"]
    },
    {
        id: 18,
        title: "The Power of Habit",
        author: "Charles Duhigg",
        category: "Nonfiction",
        genre: "Psychology / Business",
        reasonToRead: "Why habits exist and how to change them.",
        image: "https://covers.openlibrary.org/b/isbn/9780812981605-L.jpg",
        tags: ["habits", "change", "behavior"]
    },
    {
        id: 19,
        title: "The Lean Startup",
        author: "Eric Ries",
        category: "Business",
        genre: "Entrepreneurship",
        reasonToRead: "How modern companies use continuous innovation.",
        image: "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg",
        tags: ["startup", "innovation", "entrepreneurship"]
    },
    {
        id: 20,
        title: "Zero to One",
        author: "Peter Thiel with Blake Masters",
        category: "Business",
        genre: "Technology / Entrepreneurship",
        reasonToRead: "Notes on startups, progress, and future.",
        image: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg",
        tags: ["startup", "technology", "future"]
    },
    
];
const Books = () => {
    const [product, setproduct] = useState(booklist);
    const [Filter, setfilter] = useState("all"); // default value is all 
    const [Searchinput, SetSearchinput] = useState('')
    const [Searchfilter, setSearchfilter] = useState([]);

    const FilterProduct = (category) => {
        setfilter(category);
        if (Filter === "all") {
            setproduct(booklist);
        } else {
            const handlefilterchange = booklist.filter(item => item.category === Filter);
            setproduct(handlefilterchange)
        }
    }
    const updatesearch = (e) => {  // search feature
        const Newtypesearch = (e.target.value) // get the search input
        SetSearchinput(Newtypesearch); // update the search input

        const Serchfilter = booklist.filter((item) => // filter the search input
            item.title.toLowerCase().includes(Newtypesearch.toLowerCase()) ||
            item.category.toLowerCase().includes(Newtypesearch.toLowerCase()) ||
            item.author.toLowerCase().includes(Newtypesearch.toLowerCase()));// filter the search input
        setSearchfilter(Serchfilter)
    }

    const booksToDisplay = Searchinput.trim() !== "" ? Searchfilter : product;

    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-5'>Books</h1>
            {/* Search Feature  */}
            <div>

                <Categories setfilter={FilterProduct} />

                <div className='mt-4 flex border-1 w-2/5 md:w-1/4 mx-auto justify-between items-center p-2 rounded-2xl'>
                    <input className='outline-none' type="text" placeholder='search' value={Searchinput} onChange={updatesearch} />
                </div>
            </div>
            {/* Card UI  */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-3 gap-5'>
                {
                    booksToDisplay.map((item) => {
                        return (
                            <Bookcard key={item.id} title={item.title} author={item.author} category={item.category} genre={item.genre} quote={item.reasonToRead} image={item.image} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Books