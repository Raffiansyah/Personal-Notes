import React from "react";

class SearchInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search: '',
        }
        this.onSearch = this.onSearch.bind(this)
    }

    onSearch(event){
        this.setState((prevState) => {
            return {
                ...prevState,
                search: event.target.value
            }
        })
    }

    render(){
        console.log(this.state.search)
        return(
            <div className="note-search">
                <input type="text" placeholder="Cari catatan..." onChange={this.onSearch} value={this.state.search} />
            </div>
        )
    }
}


export default SearchInput;