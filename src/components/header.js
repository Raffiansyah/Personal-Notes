import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            filterText: '',
        }
        this.onSearch = this.onSearch.bind(this)
    }
    onSearch(event){
        this.setState({
            filterText: event.target.value,
        })
        const filterText = this.state.filterText
        this.props.onSearch(filterText)
    }

    render(){
        console.log('in parent', this.props.filterText)
        console.log('on search', this.state.filterText)

        return(
            <div className="note-app__header">
                <h1>Notes</h1>
                <div className="note-search">
                    <input type="text" placeholder="Cari Catatan ..." onChange={this.onSearch} value={this.state.filterText} />
                </div>
            </div>
        )
    }
}

export default Header;