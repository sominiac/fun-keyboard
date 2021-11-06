import React from 'react';

import './select.scss';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: localStorage.getItem('language') ? localStorage.getItem('language') : 'En'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.createLocalLanguage(event.target.value);
    }

    createLocalLanguage(value) {
        localStorage.setItem('language', value);
        window.location.reload();
    }

    render() {
        return (
            <select className="language__select" name="language" value={this.state.value} onChange={this.handleChange}>
                <option className="select__option select__option_English" value="En">{this.props.optionEn}</option>
                <option className="select__option select__option_Russian" value="Ru">{this.props.optionRu}</option>
            </select>
        )
    }
}

export default Select;