import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";

const CATEGORIES = ["All", "Code", "Food", "Money"];

test("displays a button for each category", () => {
  render(<CategoryFilter categories={CATEGORIES} selectedCategory="All" onSelectCategory={() => {}} />);
  CATEGORIES.forEach((category) => {
    expect(screen.queryByText(category)).toBeInTheDocument();
  });
});

test("clicking the category button adds a class of 'selected' to the button", () => {
  const mockSelectCategory = jest.fn();
  render(
    <CategoryFilter
      categories={CATEGORIES}
      selectedCategory="Code"
      onSelectCategory={mockSelectCategory}
    />
  );

  const codeButton = screen.queryByRole("button", { name: "Code" });
  const allButton = screen.queryByRole("button", { name: "All" });

  fireEvent.click(codeButton);

  expect(codeButton.classList).toContain("selected");
  expect(allButton.classList).not.toContain("selected");
  expect(mockSelectCategory).toHaveBeenCalledWith("Code");
});
