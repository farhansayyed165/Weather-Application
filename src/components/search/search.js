import React, {useState} from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, getGeoApiOption } from '../../api';

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    function handleOnChange(searchData){
        setSearch(searchData);
        onSearchChange(searchData);

    }

    function loadOptions(inputValue) {
    return fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, getGeoApiOption)
	.then(response => response.json())
	.then((response) => {
        return{
            options: response.data.map((city)=>{
                return{

                    value: `${city.lattitude} ${city.longitude} `,
                    label: `${city.name}, ${city.countryCode}  `
                }
            })

        }
    })
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
