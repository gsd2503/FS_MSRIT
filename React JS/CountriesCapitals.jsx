import './Exe2.css'

function Exe2() {
    const countryList = [
        {code: "A", country: "India", capital: "Delhi"},
        {code: "B", country: "Pakistan", capital: "Karachi"}
    ];

    return (
        <div className="cont">
            {countryList.map((item) => (
                <div key={item.code}>
                    <h3>{item.country}</h3>
                    <p>Capital: {item.capital}</p>
                </div>
            ))}
        </div>
    );
}

export default Exe2;