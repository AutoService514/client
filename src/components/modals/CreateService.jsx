import React from "react";
import styles from "./modalWindowStyle.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useForm } from "react-hook-form";

const Modal = ({ setIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    if (Object.keys(errors).length > 0) {
      e.preventDefault();
      return errors;
    }
    console.log(data);
    setIsOpen(false);
  };
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Форма додавання сервісу</h5>
          </div>
          <form
            id="form"
            method="post"
            name="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={styles.modalContentCreateService}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter title of service"
                  name="title"
                  id="title"
                  {...register("title", {
                    required: "Title is required",
                    minLength: {
                      value: 5,
                      message: "Title must be at least 5 characters",
                    },
                    maxLength: {
                      value: 30,
                      message: "Title must be at most 30 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z0-9]+$/,
                      message: "Title must contain only letters and numbers",
                    },
                  })}
                />
                {errors.title && (
                  <p className="error">{errors.title.message}</p>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter price of service"
                  name="price"
                  id="price"
                  {...register("price", {
                    required: "Price is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Price must contain only numbers",
                    },
                  })}
                />
                {errors.price && (
                  <p className="error">{errors.price.message}</p>
                )}
              </div>
              {/* <input type="text" placeholder="Enter description of service" /> */}
              <div className="form-group">
                <textarea
                  name="description"
                  placeholder="Enter description of service"
                  {...register("description", {
                    required: "Description is required",
                    minLength: {
                      value: 5,
                      message: "Description must be at least 5 characters",
                    },
                    maxLength: {
                      value: 100,
                      message: "Description must be at most 100 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z0-9]+$/,
                      message:
                        "Description must contain only letters and numbers",
                    },
                  })}
                ></textarea>
                {errors.description && (
                  <p className="error">{errors.description.message}</p>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter type id of service"
                  id="type"
                  name="type"
                  {...register("type", {
                    required: "Type is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Type id must contain only numbers",
                    },
                  })}
                />
                {errors.type && <p className="error">{errors.type.message}</p>}
              </div>
            </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button
                  className={styles.createBtn}
                  type="submit"
                  id="submit"
                  onClick={() => setIsOpen(true)}
                >
                  Create
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
