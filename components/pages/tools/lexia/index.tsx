import React, { useState, useEffect, useMemo } from "react";
import Image from 'next/image'
import axios from "axios";
import styles from './index.module.css'
const searchUrl = 'https://lexica.art/api/v1/search'
const prefix = '?q='
export const description = "根据关键字生成图片";

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
            console.log('Lexia error', error);
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
        ), [data])
    return (
        <>
            <section className={`${styles.description} pure-u-1`}>{description}</section>
            <section className={`${styles.control_area} pure-u-1`}>
                <form className="pure-form" onSubmit={onSubmit}>
                    <input type="text" className="pure-input-rounded" onChange={handleChange} value={inputText} />
                    <button type="button" className="pure-button" onClick={handleSearch}>Search</button>
                </form>
            </section>
            {
                error ? <span>Load images error,{error}</span> :
                    <section className="pure-g">
                        {imageList}
                    </section>
            }

        </>
    )
}
export default React.memo(Lexia);