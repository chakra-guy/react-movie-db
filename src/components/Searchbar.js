import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Autosuggest from 'react-autosuggest';

import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import { suggestMoviesInSearch } from '../actions/SearchActions';

class Searchbar extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
    };
  }

  getSuggestions = (value) => {
    const { reduxSuggestions } = this.props;
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength > 2 ? reduxSuggestions.slice(0, 5) : [];
  };

  getSuggestionValue = suggestion => suggestion.title;

  renderSuggestion = suggestion => (
    <div>{suggestion.title}</div>
  );

  onChange = (event, { newValue, method }) => {
    this.props.suggestMoviesInSearch(newValue);
    this.setState({ value: newValue });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    this.props.history.push(`/${suggestion.id}`);
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({ suggestions: this.getSuggestions(value) });
  };

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search for movies',
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionSelected={this.onSuggestionSelected}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

const mapStateToProps = state => ({
  reduxSuggestions: state.search.suggestions,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  suggestMoviesInSearch,
}, dispatch);

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Searchbar);
