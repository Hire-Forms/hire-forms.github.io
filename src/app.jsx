import React from "react";
import Immutable from "immutable";

import MutableList from "hire-forms-mutable-list";
import List from "hire-forms-list";
// import Autocomplete from "hire-forms-autocomplete";
import Input from "hire-forms-input";
import Select from "hire-forms-select";
import SelectList from "hire-forms-select-list";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: "",
			values: [],
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

	handleValuesChange(values) {
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
					<h2>Input</h2>
					<div className="element-type">
						<Input
							onChange={this.handleChange.bind(this)}
							placeholder="Enter value..."
							value={this.state.value} />
					</div>

					<h2>Select</h2>
					<div className="element-type">
						<div className="input-container">
							<Select
								onChange={this.handleChange.bind(this)}
								options={this.state.options}
								sortRelevance={false}
								value={this.state.value} />
						</div>
					</div>

					<h2>Select list</h2>
					<div className="element-type lists">
						<SelectList
							onChange={this.handleValuesChange.bind(this)}
							options={this.state.options}
							values={this.state.values} />
					</div>

					{/*
						<h2>Autocomplete</h2>
						<div className="element-type inputs">
							<h3>Default</h3>
							<div className="input-container">
								<Autocomplete
									onChange={this.handleValueChange.bind(this)}
									options={this.state.options}
									placeholder="Start typing for instant suggestions..."
									value={this.state.value} />
							</div>
							<h3>Async</h3>
							<div className="input-container">
								<Autocomplete
									async={this}
									onChange={this.handleValueChange.bind(this)}
									placeholder="Start typing for async suggestions..."
									value={this.state.value} />
							</div>
						</div>
					*/}

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