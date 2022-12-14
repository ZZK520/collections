import React, { useState, useEffect, useMemo } from "react";
import Image from 'next/image'
import axios from "axios";
const searchUrl = 'https://lexica.art/api/v1/search'
const prefix = '?q='

//https://lexica.art/docs
function Lexia() {
    const [inputText, setInputText] = useState("boot");
    const [data, setData] = useState([]);
    const [error, setError] = React.useState(null);
    const handleSearch = () => {
        const finalUrl = `${searchUrl}${prefix}${inputText}`;
        console.log('finalUrl', finalUrl);

        axios.get(finalUrl).then((response) => {
            console.log('response', response);

            const { images } = response.data;
            console.log('images', images);

            setData(images);
        }).catch(error => {
            console.log('error');

            setError(error);
        });;
    }
    const handleChange = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    const imageList = useMemo(() =>
        data.map(item =>
            <div className="pure-u-1-3" key={item.id}>
                <Image
                    src={item.srcSmall}
                    alt={item.prompt}
                    width={item.width}
                    height={item.height}
                    id={item.id}
                    key={item.id}
                />
            </div>

        )
        , [data])
    return (
        <>
            <input type="text" className="pure-input-rounded" onChange={handleChange} value={inputText} />
            <button className="pure-button" onClick={handleSearch}>Search</button>
            <div className="pure-g">
                {imageList}
            </div>

        </>
    )
}
const Component = React.memo(Lexia);
export default Component;