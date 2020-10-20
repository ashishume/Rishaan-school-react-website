import firebase from "../../shared/Services/firebase";
import history from "../../history";
export const addContact = async (body) => {
  const ref = firebase.database().ref("/contact").push();

  await ref.set(body);
  await ref.on(
    "value",
    (data) => {
      console.log(data.val());
      return true;
      //   history.push("/");
    },
    (err) => {
      console.log(err);
    }
  );
};
