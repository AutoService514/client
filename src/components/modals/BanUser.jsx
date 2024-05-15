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
            <h5 className={styles.heading}>Форма для бану користувача</h5>
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
            <div className={styles.modalContent}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter uuid of user"
                  name="id"
                  id="id"
                  {...register("id", {
                    required: "Id is required",
                    minLength: {
                      value: 36,
                      message: "Id must be at least 36 characters",
                    },
                    maxLength: {
                      value: 36,
                      message: "Id must be at most 36 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z0-9-]+$/,
                      message: "Id must contain only letters and numbers",
                    },
                  })}
                />
                {errors.id && (
                  <p className="error">{errors.id.message}</p>
                )}
              </div>
            </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button
                  className={styles.deleteBtn}
                  type="submit"
                  id="submit"
                  onClick={() => setIsOpen(true)}
                >
                  Ban
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
