import React from 'react';


function BookType(props) {
    return (
        <select>
            <option value="partial">:|</option>
            <option value="full">:(</option>
            <option value="free-ebooks">:)</option>
            <option value="paid-ebooks">ok</option>
            <option value="ebooks">eBook</option>
        </select>
    );
}

export default BookType;