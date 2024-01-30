"use client";
import React from "react";
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

type FormData = {
  checkboxes: {
    id: string;
    label: string;
    checked: boolean;
  }[];
  selectAll: boolean;
};

const CheckboxForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      checkboxes: [],
      selectAll: false,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "checkboxes",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Handle the form submission
    console.log(
      "Selected checkboxes:",
      data.checkboxes
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.label)
    );
  };

  const handleSelectAllChange = (checked: boolean) => {
    setValue("selectAll", checked);
    setValue(
      "checkboxes",
      fields.map((checkbox) => ({ ...checkbox, checked }))
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input
          type="checkbox"
          // {...control('selectAll')}
          onChange={(e) => handleSelectAllChange(e.target.checked)}
        />
        Select All
      </label>

      {fields.map((item, index) => (
        <div key={item.id}>
          <label>
            <Controller
              render={({ field }) => (
                <input
                  type="checkbox"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    const updatedCheckboxes = [...fields];
                    updatedCheckboxes[index].checked = e.target.checked;
                    setValue("checkboxes", updatedCheckboxes);
                  }}
                />
              )}
              control={control}
              name={`checkboxes[${index}].checked`}
            />
            {` ${item.label}`}
          </label>
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          append({
            id: `checkbox-${fields.length + 1}`,
            label: `Checkbox ${fields.length + 1}`,
            checked: false,
          })
        }
      >
        Add Checkbox
      </button>

      <button type="submit">Submit</button>

      {errors.checkboxes && <p>{errors.checkboxes.message}</p>}
    </form>
  );
};

export default CheckboxForm;
