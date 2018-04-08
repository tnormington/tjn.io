import React, { Component } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

const monthes = [
    {
        value: "01",
        label: 'Jan',
    },
    {
        value: "02",
        label: 'Feb',
    },
    {
        value: "03",
        label: 'Mar',
    },
    {
        value: "04",
        label: 'Apr',
    },
    {
        value: "05",
        label: 'May',
    },
    {
        value: "06",
        label: 'June',
    },
    {
        value: "07",
        label: 'July',
    },
    {
        value: "08",
        label: 'Aug',
    },
    {
        value: "09",
        label: 'Sept',
    },
    {
        value: "10",
        label: 'Oct',
    },
    {
        value: "11",
        label: 'Nov',
    },
    {
        value: "12",
        label: 'Dec',
    },
];

const currentYear = (new Date()).getFullYear();
const years = [];

let i = 0;
while(i < 10) {
    years.push({ 
        value: currentYear + i,
        label: currentYear + i
    })
    i++;
}


export default class CreditCardForm extends Component {
    constructor(props) {
        super(props)

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleMonthChange = this.handleSelectChange.bind(this, 'month')
        this.handleYearChange = this.handleSelectChange.bind(this, 'year')
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            ccInfo: {
                number: "",
                cvc: "",
                exp: {
                    month: "",
                    year: ""
                }
            }
        }
    }

    handleInputChange(e) {
        const name = e.target.name;
        let val = e.target.value;

        this.setState( prevState => {
            // console.log(Number(val));
            if(!this._checkValIsNumber(val)) return prevState;

            if( name === 'number' && prevState.ccInfo[name] ) {
                val = this._lintNumber(val);
            }
            prevState.ccInfo[name] = val;
            return prevState;
        });
    }

    handleSelectChange(key, option) {
        this.setState(prevState => {
            prevState.ccInfo.exp[key] = option;
            return prevState;
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit the form!')
    }

    _checkValIsNumber(number) {
        const result = Number(number.replace(/\s/g, ''));
        return !isNaN(result);
    }

    _lintNumber(number) {
        // let result = number.replace(/\s/g, '');
        let result = number;
        console.log(result.length)
        if(result.length === 4) result = `${result} `;
        if(result.length === 9) result = `${result} `;
        if(result.length === 14) result = `${result} `;
        return result;
    }

    render() {
        
        const {
            number,
            cvc,
            
        } = this.state.ccInfo;
    
        return (
            <form id="simplify-payment-form">
                <div>
                    <label
                        htmlFor="number">
                        Credit Card Number:
                    </label>
                    <input
                        id="number"
                        name="number"
                        type="text"
                        maxLength="20"
                        autoComplete="off"
                        value={number}
                        onChange={this.handleInputChange}
                        autoFocus />
                </div>
                <div>
                    <label htmlFor="cvc">
                        CVC:
                    </label>
                    <input
                        id="cvc"
                        name="cvc"
                        type="text"
                        maxLength="4"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                        value={cvc} />
                </div>
                <div>
                    <label>Expiry Date: </label>
                    <Select
                        placeholder="Month"
                        name="form-field-name"
                        value={this.state.ccInfo.exp.month}
                        onChange={this.handleMonthChange}
                        options={monthes}
                        searchable={false}
                        />
                    <Select
                        placeholder="Year"
                        name="form-field-name"
                        value={this.state.ccInfo.exp.year}
                        onChange={this.handleYearChange}
                        options={years}
                        searchable={false}
                        />
                </div>
                <button
                    onClick={this.handleSubmit}
                    id="process-payment-btn">
                    Process Payment
                </button>
            </form>
        )
    }
}