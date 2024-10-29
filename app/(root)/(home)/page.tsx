import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/filter/Filter";
import { HomePageFilters } from "@/constants/filter";
import HomeFilters from "@/components/home/HomeFilters";

type HomePageQuestions = {
  id: number;
  title: string;
  tags: { _id: number; name: string }[];
  author: string;
  upvotes: string;
  views: string;
  answers: string;
  createdAt: Date;
}[];

const questions: HomePageQuestions = [
  {
    id: 1,
    title: "How to open a link in a new Tab in NextJS?",
    tags: [{ _id: 1, name: "next.js" }],
    author: "John doe",
    upvotes: "14",
    views: "35",
    answers: "2",
    createdAt: new Date("2023-09-01T12:00:00.000Z"),
  },
  {
    id: 2,
    title: "How to center a div?",
    tags: [
      { _id: 1, name: "css" },
      { _id: 2, name: "html" },
    ],
    author: "Alex fi",
    upvotes: "9",
    views: "26",
    answers: "4",
    createdAt: new Date("2023-09-01T12:00:00.000Z"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex flex-col-reverse justify-between sm:flex-row sm:items-center gap-4 w-full">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link className="flex justify-end max-sm:w-full" href="/ask-question">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a question
          </Button>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row md:flex-col justify-between items-center gap-5 mt-11">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeHolder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex w-full"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex flex-col gap-6 w-full">
        {questions.length > 0
          ? questions.map((question) => "question")
          : "No questions are found"}
      </div>
    </>
  );
};

export default Home;
