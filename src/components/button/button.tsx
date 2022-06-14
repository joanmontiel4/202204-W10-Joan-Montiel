import './button.css';

export function Button({
    areAllSelected,
    handleSelect,
}: {
    areAllSelected: boolean;
    handleSelect: (selectedValue: boolean) => void;
}) {
    return (
        <button
            className="button button--select"
            onClick={() => handleSelect(!areAllSelected)}
        >
            {areAllSelected ? 'Unselect all' : 'Select all'}
        </button>
    );
}
