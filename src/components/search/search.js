import React, {useState} from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL } from '../api';

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    function handleOnChange(searchData){
        setSearch(searchData);
        onSearchChange(searchData);

    }

    function loadOptions(inputValue) {
    return fetch('/cities', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    }
    return (
        <div className='container'>
            <AsyncPaginate
                placeholder='Search for city'
                debounceTimeout={800}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions} />

        </div>
    );
}

export default Search;
