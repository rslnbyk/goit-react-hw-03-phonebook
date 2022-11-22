import { Component } from 'react';
import { Form, FormInput, FormSubmit } from './ContactForm.styled';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    number: '',
    name: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitForm({ ...this.state });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Name
          <br />
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label>
          Number
          <br />
          <FormInput
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <FormSubmit type="submit">Add contact</FormSubmit>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
