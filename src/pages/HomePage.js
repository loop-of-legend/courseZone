import React from "react";
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Footer from "../components/footer";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="holder">
      {isAuthenticated ? (
        <>
          <Hero />
          <CoursesList />
          <CategoriesList />
          <Footer />
        </>
      ) : (
        <>
          <Hero />
          <CategoriesList />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;
