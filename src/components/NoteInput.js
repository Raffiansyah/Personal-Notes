import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      maxText: 30,
      archived: false,
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChange(event) {
    const max = 30;
    const titleInput = event.target.value.slice(0, max);
    const titleInputLength = titleInput.length;

    this.setState((prevState) => {
      return {
        ...prevState,
        title: titleInput,
        maxText: max - titleInputLength,
      };
    });
  }

  onBodyChange(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  resetForm() {
    this.setState({
      title: "",
      body: "",
      maxText: 30,
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.resetForm();
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          {`Sisa Karakter: ${this.state.maxText}`}
        </p>
        <form onSubmit={this.onSubmitHandler}>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            required
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Tuliskan Catatanmu disini ..."
            required
            value={this.state.body}
            onChange={this.onBodyChange}
          ></textarea>
          <button type="submit">Tambah</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
