import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const { onClose, isOpen, onAddPlace } = props;

  const [formValues, setFormValues] = useState({ placeName: "", placeUrl: "" });

  function handleAddPlace(e) {
    e.preventDefault();
    onAddPlace({ name: formValues.placeName, link: formValues.placeUrl });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  React.useEffect(() => {
    setFormValues({ placeName: "", placeUrl: "" });
  }, []);

  return (
    <PopupWithForm
      name="add-place-form"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlace}
      buttonLabel="Создать"
    >
      <input
        name="placeName"
        value={formValues.placeName}
        onChange={handleChange}
        className="popup__input popup__input_type_place-name"
        id="place-name"
        type="text"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="place-name-input-error popup__error"></span>
      <input
        name="placeUrl"
        value={formValues.placeUrl}
        onChange={handleChange}
        className="popup__input popup__input_type_place-url"
        id="place-url"
        type="url"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="place-url-input-error popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
