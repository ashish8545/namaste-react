import { Provider } from "react-redux";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

it("Should load Header component with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);

  // fireEvent.click(cartItems) for clicking a button explicitly

  expect(cartItems).toBeInTheDocument();
});
