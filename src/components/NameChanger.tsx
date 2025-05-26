import { useState} from "react";

const NameChanger = () => {
    const [name, setName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    }
    return (
        <>
            <h1 className="text-center pt-4">Hello, {name || "Stranger"}</h1>
            <div className="text-center mt-4">
            <input type="text"
                   value={name}
                   onChange={handleChange}
                   className="border px-1 py-2"
                    />
            </div>
        </>
    )
}

export { NameChanger };