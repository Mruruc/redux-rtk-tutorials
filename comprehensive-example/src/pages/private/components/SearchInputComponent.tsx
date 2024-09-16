import { ChangeEvent } from "react";

interface SearchInputProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchInputComponent = ({
  name,
  value,
  onChange,
  placeholder,
}: SearchInputProps) => {
  return (
    <div className="input-group">
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
      />
      <div className="input-group-append">
        <span className="input-group-text">
          <i className="fas fa-search py-1"></i>
        </span>
      </div>
    </div>
  );
};
export default SearchInputComponent;
