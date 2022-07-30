import { useContext, useState } from "react"
import Select from "react-select"
import { ColorMood } from "../App"

const options = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "UnCompleted", label: "UnCompleted" },
]


const FilterTodos = ({ onFilter }) => {
    const mood = useContext(ColorMood)

    const changeFilterHandler = (selectedOption) => {
        onFilter(selectedOption.value);
    }

    return (
        <Select
            onChange={changeFilterHandler}
            options={options}
            className="selectFilter"
            id={mood === "light" ? "a" : "a_D"}
        />
    );
}

export default FilterTodos;