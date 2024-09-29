import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Button from "../elements/Button";
import Header from "../layouts/Header";
import PageTransition from "./PageTransition";
import StairTransition from "./StairTransition";

const Agenda = () => {
  const location = useLocation(); // Hook untuk mendapatkan path/url saat ini

  // Fungsi untuk menentukan apakah link aktif
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Header/>
      <StairTransition/>
      <PageTransition>
        <section className="md:py-10 md:px-24 md:p-8 p-5 bg-gray-950 min-h-screen text-white overflow-hidden">
          <h2 className="md:mt-20 mt-10 md:mb-2 md:text-4xl text-2xl font-audiowide font-bold text-green-600">
            Shandy's Agenda
          </h2>
          <p className="mb-4">Let's check about Shandy's Agenda</p>
          <hr className="border-b border-slate-200 mb-px" />
          <hr className="border-b-2 border-slate-300" />

          {/* Outlet for Dynamic Navbar inside one page without loading phase */}
          <div className="p-2 mt-2 flex flex-row">
            <Link to="/agenda/today-agenda">
              <Button
                addedClassname={`px-3 py-1 mr-2 md:mr-3 rounded-full ${
                  isActive("/agenda/today-agenda")
                    ? "bg-green-600 border-none font-bold"
                    : "border border-green-500"
                }`}
              >
                Today
              </Button>
            </Link>
            <Link to="/agenda/previous-agenda">
              <Button
                addedClassname={`px-3 py-1 mr-2 md:mr-3 rounded-full ${
                  isActive("/agenda/previous-agenda")
                    ? "bg-green-600 border-none font-bold"
                    : "border border-green-500"
                }`}
              >
                Previous
              </Button>
            </Link>
            <Link to="/agenda/next-agenda">
              <Button
                addedClassname={`px-3 py-1 mr-2 md:mr-3 rounded-full ${
                  isActive("/agenda/next-agenda")
                    ? "bg-green-600 border-none font-bold"
                    : "border border-green-500"
                }`}
              >
                Next
              </Button>
            </Link>
          </div>

          <Outlet />
        </section>
      </PageTransition>
    </>
  );
};

export default Agenda;
