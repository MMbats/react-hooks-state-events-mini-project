import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import { CATEGORIES } from "../data";

test("calls onTaskFormSubmit when the form is submitted", () => {
  const mockSubmit = jest.fn();
  render(<NewTaskForm categories={CATEGORIES} onTaskFormSubmit={mockSubmit} />);

  fireEvent.change(screen.queryByLabelText(/Details/), {
    target: { value: "Test Task" },
  });
  fireEvent.change(screen.queryByLabelText(/Category/), {
    target: { value: "Code" },
  });
  fireEvent.click(screen.queryByText(/Add task/));

  expect(mockSubmit).toHaveBeenCalledWith({
    text: "Test Task",
    category: "Code",
  });
});
