import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/RestaurantCardMocks.json";
import "@testing-library/jest-dom";

it("should render the Restaurant card props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Hari Om Dhabha");

  expect(name).toBeInTheDocument();
});

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

it("should render the Restaurant card with promoted label", () => {
  render(<RestaurantCardPromoted resData={MOCK_DATA} />);

  const name = screen.getByText("Promoted");

  expect(name).toBeInTheDocument();
});
