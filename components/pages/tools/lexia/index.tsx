import React, { useState, useEffect, useMemo } from "react";
import Image from 'next/image'
import axios from "axios";
const searchUrl = 'https://lexica.art/api/v1/search'
const prefix = '?q='

//https://lexica.art/docs
function Lexia() {
    const [inputText, setInputText] = useState("boot");
    const [data, setData] = useState([]);
    const handleSearch = () => {
        const finalUrl = `${searchUrl}/${prefix}${inputText}`;
        console.log('finalUrl', finalUrl);

        axios.get(finalUrl).then((response) => {
            console.log('response', response);

            const { images } = response.data;
            setData(images);
        });
    }
    const handleChange = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    const imageList = useMemo(() =>
        data.map(item => {
            return <>
                <Image
                    src={item.src}
                    alt={item.prompt}
                    width={item.width}
                    height={item.height}
                    id={item.id}
                />
            </>
        })
        , [data])
    return (
        <>
            <input type="text" className="pure-input-rounded" onChange={handleChange} value={inputText} />
            <button className="pure-button" onClick={handleSearch}>Search</button>
            <ul>
                {imageList.length}
            </ul>
        </>
    )
}
const Component = React.memo(Lexia);
export default Component;