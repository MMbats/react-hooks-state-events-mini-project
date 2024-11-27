import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Task from "../components/Task";

test("displays the task text", () => {
  render(<Task text="text!" category="category!" onDeleteTask={() => {}} />);
  expect(screen.queryByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  render(<Task text="text!" category="category!" onDeleteTask={() => {}} />);
  expect(screen.queryByText("category!")).toBeInTheDocument();
});
