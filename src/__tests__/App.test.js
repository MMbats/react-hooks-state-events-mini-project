import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

test("is removed from the list when the delete button is clicked", () => {
  render(<App />);

  const task = screen.queryByText(/Buy rice/);
  const deleteButton = task.closest(".task").querySelector("button");

  fireEvent.click(deleteButton);

  expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
});

test("clicking the category button filters the task list", () => {
  render(<App />);

  const codeButton = screen.queryByRole("button", { name: "Code" });
  fireEvent.click(codeButton);

  expect(screen.queryByText("Build a todo app")).toBeInTheDocument();
  expect(screen.queryByText("Buy rice")).not.toBeInTheDocument();
});

test("displays all tasks when the 'All' button is clicked", () => {
  render(<App />);

  const allButton = screen.queryByRole("button", { name: "All" });
  fireEvent.click(allButton);

  expect(screen.queryByText("Build a todo app")).toBeInTheDocument();
  expect(screen.queryByText("Buy rice")).toBeInTheDocument();
});

test("adds a new item to the list when the form is submitted", () => {
  render(<App />);

  const initialTaskCount = screen.queryAllByRole("listitem").length;

  fireEvent.change(screen.queryByLabelText(/Details/), {
    target: { value: "Pass the tests" },
  });

  fireEvent.change(screen.queryByLabelText(/Category/), {
    target: { value: "Code" },
  });

  fireEvent.click(screen.queryByText(/Add task/));

  expect(screen.queryByText("Pass the tests")).toBeInTheDocument();
  expect(screen.queryAllByRole("listitem")).toHaveLength(initialTaskCount + 1);
});
