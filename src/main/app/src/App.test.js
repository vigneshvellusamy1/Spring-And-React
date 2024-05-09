// import { render, screen } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom"; // Corrected import
// import HomeUser from "./Component/HomeUser"; // Corrected component name

// describe('test suite for HomeUser', () => {
//   test('check header', () => {
//     render(
//       <MemoryRouter> {/* Use MemoryRouter instead of router */}
//         <HomeUser /> {/* Corrected component name */}
//       </MemoryRouter>
//     );
//     const element = screen.getByTestId("h1"); // Corrected method name
//     expect(element).toBeInTheDocument();
//     expect(element).toHaveTextContent("User List"); // Corrected text content
//   });

//   test('button is present', () => {
//     render(
//       <MemoryRouter>
//         <HomeUser />
//       </MemoryRouter>
//     );
//     const button = screen.getByRole('button', { name: "back" }); // Corrected method name
//     expect(button).toBeInTheDocument();
//   });
// });
