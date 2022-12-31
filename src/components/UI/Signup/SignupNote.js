import styles from "./SignupNote.module.css";

const SignupNote = () => {
  return (
    <div className={styles.signupNoteMain}>
      <article className={styles.signupNoteContents}>
        To create an account and gain access to the functionality of this site,
        please fill out the form below. You will need to enter a valid email
        address and a password with a minimum length of 6 characters.
      </article>
    </div>
  );
};

export default SignupNote;
