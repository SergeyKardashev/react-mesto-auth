import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const { onClose, isOpen, onAddPlace } = props;

  const cardNameRef = React.useRef();
  const cardLinkRef = React.useRef();

  function handleAddPlace(e) {
    e.preventDefault();
    onAddPlace({ name: cardNameRef.current.value, link: cardLinkRef.current.value });
  }

  React.useEffect(() => {
    cardNameRef.current.value = "";
    cardLinkRef.current.value = "";
  }, [isOpen]);

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
        ref={cardNameRef}
        className="popup__input popup__input_type_place-name"
        id="place-name"
        name="placeName"
        type="text"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="place-name-input-error popup__error"></span>
      <input
        ref={cardLinkRef}
        className="popup__input popup__input_type_place-url"
        id="place-url"
        name="placeUrl"
        type="url"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="place-url-input-error popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
