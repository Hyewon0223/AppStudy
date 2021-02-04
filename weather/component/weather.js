import React, {useState, useEffect} from 'react';

export const weather = (props) => {
    const [select, setSelect] = useState({
        value : 'Seoul',
    })

    const getValue = e => {
        const {name, value} = e.target;
        setSelect({
            ...select,
            [name]: value,
        })
    };

    const [weather, setWeather] = useState({
        loc : 'Seoul',
        country : 'KR',
        temp:0,
        desc:'',
        icon:'',
    });

    const PressEnter = e => {
        if (e.key === 'Enter') searchClick();
    }

    const searchClick = e => {
        const apiKey = process.env.REACT_APP_OPENWEATHER_KEY;
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${select.value}&appid=${apiKey}`;

        axios.get(URL).then(result => {
            result = result.data
            console.log(select.value,result);

            setWeather({
                loc: result.name,
                country : result.sys.country,
                temp: Math.round(result.main.temp- 273.15),
                desc: result.weather[0].description,
                icon: `http://openweathermap.com/img/w/${result.weather[0].icon}.png`,
            })
        })
    }

    useEffect(() => {
        searchClick();
    }, []);

    return <>
        <div className = "Search">
            <input id = "weatherSearch" type = "text" placeholder="지역을 입력하세요" name="value" value = {select.value==null?"":select.value} onChange={getValue} onKeyPress={PressEnter}/>
            <button id="searchBtn" onClick={searchClick}/>
        </div>

        <div className = "Mac">
            <div className = "TerminalBar">
                <div id = "Circle">
                    <div id="circle1"> </div>
                    <div id="circle2"> </div>
                    <div id="circle3"> </div>
                </div>
                <div id="title">How's the weather?</div>
                <div></div>
            </div>

            <div className = "DisplayWeather">
                <div id = "loc">{weather.loc}, {weather.country}</div>
                <div id = "icon"><img src={weather.icon}/></div>
                <div id = "desc">{weather.desc}</div>
                <div id = "temp">{weather.temp}℃</div>
            </div>
        </div>
    </>
}
