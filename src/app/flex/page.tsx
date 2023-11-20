import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="main  ">
        <h1> Using Flex Split</h1>
        {/* ======================================================== */}

        <section className="container flex-col flex-wrap">
          <div className="top rounded-t-3xl shadow-2xl">
            <h1>Join Our Community</h1>
            <h2>30-days, hassle-free money back guarantee</h2>
            <h4>
              Gain access to our full library of tutorials along with expert
              code reviews.
            </h4>
            <h4>
              Perfect for any developers who are serious about honing their
              skills
            </h4>
          </div>
          <section className="container flex-row">
          {/* <div className="flex-center"> */}
            <div className="left-half rounded-bl-3xl shadow-2xl flex-row">
              <article>
                <h1>Monthly Subscription</h1>
                <h1>$29</h1>
                <h3>Per month</h3>
                <h3>Full Access for less than $1 a day</h3>
                <button> Signup </button>
              </article>
            </div>

            <div className="right-half rounded-br-3xl shadow-2xl ">
              <article>
                <h1> Why Us????</h1>
                <h3>Tutorials by industry experts</h3>
                <h3>Peer to expert code review</h3>
                <h3>Codeing easness</h3>
                <h3>Access to our GitHub repos</h3>
                <h3>Community forum</h3>
                <h3>Community forum</h3>
                
              </article>
            </div>
            {/* </div> */}
          </section>
        </section>
      </div>
    </div>
  );
}
