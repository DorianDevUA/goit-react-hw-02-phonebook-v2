import { nanoid } from 'nanoid';

export function SearchBox({ value, onChange }) {
  const searchInputId = nanoid();

  return (
    <>
      <label htmlFor={searchInputId}>Find contacts by name:</label>
      <input
        type="text"
        name="Search"
        value={value}
        id={searchInputId}
        placeholder="Search"
        onChange={onChange}
      />
    </>
  );
}
