import React from "react";
import {RadioButtonPanel} from "./RadioButtonPanel";

export class Search extends React.Component {
    state = {
        search: "",
        type: "all",
    };

    doSearch = () => {
        const {search, type} = this.state;
        this.props.searchMovies(search, type);
    };

    handleKey = (e) => {
        if (e.key === "Enter") {
            this.doSearch();
        }
    };

    // если у тебя есть Materialize, будет toast, иначе alert
    notify = (text) => {
        if (window.M?.toast) window.M.toast({ html: text });
        else alert(text);
    };

    handleTypeChange = (nextType) => {
        const query = this.state.search.trim();

        if (!query && nextType !== "all") {
            this.notify("Сначала введите поисковый запрос, затем выберите тип.");
            this.setState({ type: "all" });
            return;
        }

        this.setState({ type: nextType });
    };

    render() {
        const {search, type} = this.state;

        return (
            <div className="row">
                <div className="input-field">
                    <input
                        className="validate"
                        placeholder="search"
                        type="search"
                        value={search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}
                    />
                </div>

                <RadioButtonPanel
                    value={this.state.type}
                    onChange={this.handleTypeChange}
                    options={[
                        { value: "all", label: "all" },
                        { value: "movie", label: "movie" },
                        { value: "series", label: "series" },
                    ]}
                />

                <button className="btn" onClick={this.doSearch}>
                    Search
                </button>
            </div>
        );
    }
}
