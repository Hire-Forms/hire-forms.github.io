import React from "react";
import Immutable from "immutable";

import MutableList from "hire-forms-mutable-list";
import List from "hire-forms-list";
// import Autocomplete from "hire-forms-autocomplete";
import Input from "hire-forms-input";
import Select from "hire-forms-select";
import SelectList from "hire-forms-select-list";
import ListFilter from "hire-forms-list-filter";
import Autocomplete from "hire-forms-autocomplete";
import AutocompleteList from "hire-forms-autocomplete-list";

import {castKeyValueArray} from "hire-forms-utils";

let validateNumbersOnly = function(value) {
	let re = /^\d+$/;
	let isValid = re.test(value);

	return {
		isValid: isValid,
		message: isValid ? "" : "Only numbers are allowed."
	};
};

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: "",
			keyvalue: {
				key: "",
				value: ""
			},
			values: [],
			keyvalues: [],
			options: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]
		};
	}

	handleChange(value) {
		let state = (value instanceof Immutable.List) ?
			{list: value} :
			{value: value};

		this.setState(state);
	}

	handleValueChange(value) {
		this.setState({value: value});
	}

	handleKeyValueChange(value) {
		this.setState({keyvalue: value});
	}

	handleKeyValueListChange(list) {
		this.setState({keyvalues: list});
	}

	handleValuesChange(values) {
		console.log(values);
		this.setState({values: values});
	}

	render() {
		return (
			<div className="showcase">
				<h1>Hire Forms Showcase</h1>
				{/*
					<ol className="menu">
						<li>Input</li>
						<li>Select</li>
						<li>Select list</li>
						<li>List</li>
						<li>Mutable list</li>
					</ol>
				*/}
				<div className="elements">
					<h2>Autocomplete</h2>
					<div className="element-type inputs">
						<h3>Default</h3>
						<div className="input-container">
							<Autocomplete
								onChange={this.handleKeyValueChange.bind(this)}
								options={castKeyValueArray(this.state.options)}
								placeholder="Search..."
								value={this.state.keyvalue} />
						</div>
						{/*
							<h3>Async</h3>
							<div className="input-container">
								<Autocomplete
									async={this}
									onChange={this.handleValueChange.bind(this)}
									placeholder="Start typing for async suggestions..."
									value={this.state.value} />
							</div>
						*/}
					</div>
					<h2>Autocomplete List</h2>
					<div className="element-type inputs">
						<h3>Default</h3>
						<AutocompleteList
							onChange={this.handleKeyValueListChange.bind(this)}
							options={castKeyValueArray(this.state.options)}
							placeholder="Search..."
							values={this.state.keyvalues} />
					</div>
					<h2>List filter</h2>
					<div className="element-type">
						<ListFilter
							onChange={this.handleChange.bind(this)}
							options={this.state.options}
							placeholder="Search list..."
							value={this.state.value} />
					</div>

					<h2>Input</h2>
					<div className="element-type">
						<h3>Default</h3>
						<Input
							onChange={this.handleChange.bind(this)}
							placeholder="Enter value..."
							value={this.state.value} />
						<h3>With validation (numbers only)</h3>
						<Input
							onChange={this.handleChange.bind(this)}
							placeholder="Enter value..."
							validate={validateNumbersOnly}
							value={this.state.value} />
					</div>

					<h2>Select</h2>
					<div className="element-type">
						<h3>Default</h3>
						<Select
							onChange={this.handleChange.bind(this)}
							options={this.state.options}
							placeholder="Select value..."
							sortRelevance={false}
							value={this.state.value} />
						<h3>Async</h3>
						<Select
							async={(done) => {setTimeout(() => done(this.state.options), 2000)}}
							onChange={this.handleChange.bind(this)}
							placeholder="Select value..."
							sortRelevance={false}
							value={this.state.value} />
					</div>

					<h2>Select list</h2>
					<div className="element-type lists">
						<h3>String</h3>
						<SelectList
							onChange={this.handleValuesChange.bind(this)}
							options={this.state.options}
							values={this.state.values} />
						<h3>Key/value</h3>
						<SelectList
							onChange={this.handleKeyValueListChange.bind(this)}
							options={castKeyValueArray(this.state.options)}
							values={this.state.keyvalues} />
						<h3>Async</h3>
						<SelectList
							async={(done) => {setTimeout(() => done(castKeyValueArray(this.state.options)), 1000)}}
							onChange={this.handleKeyValueListChange.bind(this)}
							values={this.state.keyvalues} />
					</div>


					<h2>List</h2>
					<div className="element-type lists">
						<h3>Default</h3>
						<List values={this.state.options} />
						<h3>Ordered</h3>
						<List
							ordered={true}
							values={this.state.options} />
						<h3>Editable</h3>
						<List
							editable={true}
							onChange={this.handleChange.bind(this)}
							values={this.state.options} />
					</div>

					<h2>Mutable list</h2>
					<div className="element-type lists">
						<h3>Default</h3>
						<MutableList
							onChange={this.handleChange.bind(this)}
							placeholder="Type something to add to the list..."
							values={this.state.values} />
						<h3>Ordered</h3>
						<MutableList
							onChange={this.handleChange.bind(this)}
							ordered={true}
							placeholder="Type something to add to the list..."
							values={this.state.values} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;