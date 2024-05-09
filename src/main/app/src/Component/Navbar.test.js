import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Corrected import
import Navbar from "./Navbar"; // Corrected component name
import InsertItem from "./InsertItem";

describe('Test Suite for Navbar',()=>{
  
   test('button is present',()=>{
    render(<InsertItem />);
     const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  })});

  // test('button is present', () => {
  //   render(<Router><InsertTariff/></Router>);
  //   const button = screen.getByRole('button', { name: "Back"});
  //   expect(button).toBeInTheDocument();
  // });