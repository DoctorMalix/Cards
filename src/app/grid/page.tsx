import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1> Using Grid Split</h1>

      {/* ====================================================================== */}
      <h3> Columns</h3>
      <div className="grid grid-cols-[20%,60%,20%] gap-x-4 gap-y-4 rounded-t-full">
        <div className="bg-red-300">COLUMN 1 </div>
        <div className=" bg-green-300">COLUMN 2 </div>
        <div className=" bg-red-300">COLUMN 3 </div>
      </div>

      <h3> ROWS</h3>
      <div className="grid grid-rows-[90%,30%,30%] gap-x-4 gap-y-4  rounded-t-full">
        <div className="bg-red-300 h-1000 rounded-t-full gap-x-4 gap-y-4 ">
          ROW1
          <div className="bg-red-300 grid grid-cols-[20%,60%,20%] gap-x-4 gap-y-4 ">
            
            <div className="bg-purple-300 rounded-full">COLUMN 1 </div>
            <div className=" bg-green-300 rounded-full ">COLUMN 2 </div>
            <div className=" bg-blue-300 rounded-full">COLUMN 3 </div>

          </div>
        </div>
        <div className=" bg-green-300 rounded-full">ROW 2 </div>
        <div className=" bg-red-300 rounded-full">ROW 3 </div>
      </div>

      {/* ====================================================================== */}

      <div className="container py-10 grid sm:grid-cols-2 ">
        <div className="component-header sm:col-start-1 sm:col-end-3 rounded-t-3xl">
          <h2>Join our community</h2>
          <h3>30-day, hassle-free money back guarantee</h3>
          <p>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className="subscription rounded-bl-3xl">
          <h3>Monthly Subscription</h3>
          <span className="price">$29</span>
          <span className="per">per month</span>
          <p>Full access for less than $1 a day</p>
          <a href="/signup" id="sign-up">
            Sign Up
          </a>
        </div>
        <div className="why rounded-br-3xl">
          <h3>Why Us</h3>
          <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
        <div className="py-10"></div>
      </div>

      {/* ======================================================================== */}
    </div>
  );
}
