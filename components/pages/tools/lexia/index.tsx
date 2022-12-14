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
        axios.get(finalUrl).then((response) => {
            const { images } = response.data;
            setData(images);
        }).catch(error => {
            console.log('Lexia error',error);
            setError(error);
        });;
    }
    const handleChange = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    // 防止默认的提交刷新行为
    const onSubmit = (event) => {
        event.preventDefault();
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
            <form className="pure-form" onSubmit={onSubmit}>
                <input type="text" className="pure-input-rounded" onChange={handleChange} value={inputText} />
                <button type="button" className="pure-button" onClick={handleSearch}>Search</button>

            </form>
            {
                 error  ? <span>Load images error,{error}</span> :
                    <div className="pure-g">
                        {imageList}
                    </div>
            }

        </>
    )
}
const Component = React.memo(Lexia);
export default Component;