import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

function FormTest() {
  const [socialsQuantity, setSocialsQuantity] = useState(1);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setFocus,
  } = useForm({
    defaultValues: {
      socials: [{ value: "" }],
    },
  });

  const {
    fields,
    append: appendSocial,
    remove: removeSocial,
    // replace,
  } = useFieldArray({
    name: "socials",
    control,
  });

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const handleAddSocial = () => {
    const social = document.getElementById(`social_${socialsQuantity - 1}`);

    if (social.value !== "") {
      appendSocial();
      setSocialsQuantity(socialsQuantity + 1);
    }
  };

  const handleRemoveSocial = (i) => {
    if (socialsQuantity > 1) {
      removeSocial(i);
      setSocialsQuantity(socialsQuantity - 1);
    }
  };

  const submitForm = (formData) => {
    if (formData.socials.length >= 0) {
      const socialsArray = formData.socials.map(({ value }) => value);

      formData.socials = socialsArray;
    }

    // console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <h1>Contacto</h1>

        <h2>Email</h2>

        <input
          type="text"
          autoComplete="off"
          {...register("email", {
            required: true,
            // pattern: /^[\w-.]+@([\w-])+[.\w-]*$/i,
          })}
        />

        {errors.email?.type === "required" && (
          <p className="g-error-input">Ingresa tu email</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="g-error-input">Ingresa un email válido</p>
        )}

        <h2>Dirección</h2>

        <input
          type="text"
          placeholder="Estado"
          autoComplete="off"
          {...register("address.state", {
            required: true,
          })}
        />

        {errors.address?.state?.type === "required" && (
          <p className="g-error-input">Ingresa el Estado</p>
        )}

        <input
          type="text"
          placeholder="Ciudad"
          autoComplete="off"
          {...register("address.city")}
        />

        <h2>Socials</h2>

        {React.Children.toArray(
          fields.map((_, i) => (
            <div>
              <input
                type="text"
                autoComplete="off"
                id={`social_${i}`}
                {...register(`socials.${i}.value`)}
              />

              {socialsQuantity > 1 && (
                <span onClick={() => handleRemoveSocial(i)}>remover</span>
              )}
            </div>
          )),
        )}

        {errors?.socials && <p>hubo un error</p>}

        <button type="button" onClick={handleAddSocial}>
          Agregar social
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormTest;
