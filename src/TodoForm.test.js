import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("TodoForm works as intended", function () {
    it("renders without crashing", function () {
        render(
            <TodoForm initialFormData={{ title: '', description: '', priority: 1 }} handleSave={() => 'test'} />);
    });

    const initialFormData = {
        title: 'Test',
        description: 'Testing',
        priority: 3,
    };

    it("displays form correctly", function () {
        const { queryByText, queryByDisplayValue } = render(
            <TodoForm initialFormData={initialFormData} handleSave={() => 'test'} />);

        expect(queryByText('Testing')).toBeInTheDocument();
        expect(queryByDisplayValue('Test')).toBeInTheDocument();
        expect(queryByDisplayValue('Meh')).toBeInTheDocument();
    });

    it("displays changes correctly (including submission of form)", function () {
        
        const handleSave = jest.fn();
        
        const { debug,
                queryByText,
                queryByDisplayValue,
                getByLabelText,
                container } = render(
                <TodoForm handleSave={handleSave} />);
        const titleInput = getByLabelText("Title");
        const descriptionInput = getByLabelText("Description");
                    
        debug();
        //console.log("1", initialFormData);

        fireEvent.change(titleInput, { target: { value: "such wow" } });
        fireEvent.change(descriptionInput, { target: { value: 'very nice' } });
        
        debug();
        //console.log("2", initialFormData);

        expect(queryByDisplayValue('such wow')).toBeInTheDocument();
        expect(queryByText('very nice')).toBeInTheDocument();

        const form = container.querySelector('.NewTodoForm');
        fireEvent.submit(form);
        
        debug();
        //console.log("3", initialFormData);
        
        expect(handleSave).toHaveBeenCalledTimes(1)
        expect(queryByDisplayValue('such wow')).not.toBeInTheDocument();
        expect(queryByText('very nice')).not.toBeInTheDocument();
    });
});