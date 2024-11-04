import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/RestaurantAllDataMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search res list for pizza text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const search = screen.getByPlaceholderText("Search");

  fireEvent.change(search, { target: { value: "pizza" } });

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(3);
});

it("should load 5 restaurants when clicked on top rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeClickingTopRatedRestaurants =
    screen.getAllByTestId("resCard");

  expect(cardsBeforeClickingTopRatedRestaurants.length).toBe(20);

  const topRatedButton = screen.getByRole("button", { name: "Above 4 Stars" });

  fireEvent.click(topRatedButton);

  const cardsAfterClickingTopRatedRestaurants =
    screen.getAllByTestId("resCard");

  expect(cardsAfterClickingTopRatedRestaurants.length).toBe(5);
});
