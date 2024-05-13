import './ListBank.css';

function ListBank({ children}) {
    return (
        <ul className="ListBank">
            {children}
        </ul>
    );
}

export default ListBank;